const express = require("express");
const app = express();
const fetch = require("node-fetch");
const path = require("path");
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
require("dotenv").config();

const Sequelize = require("sequelize-cockroach-db");
const {
  AssistantFallbackActionsInstance,
} = require("twilio/lib/rest/preview/understand/assistant/assistantFallbackActions");
const symblAppId = process.env.SYMBL_APP_ID;
const symblAppSecret = process.env.SYMBL_APP_SECRET;
const symblApiBasePath =
  process.env.SYMBL_API_BASE_PATH || "https://api.symbl.ai";

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

const cockDb_PASSWORD = process.env.COCKDB_PASSWORD;
const cockDb_USERNAME = process.env.COCKDB_USERNAME;
const cockDb_HOST = process.env.COCKDB_HOST;
const cockDb_PORT = process.env.COCKDB_PORT;
const cockDb_DATABASE = process.env.COCKDB_DATABASE;
// Data Base Global Variable Declaration
let sequelize = new Sequelize({
  dialect: "postgres",
  username: cockDb_USERNAME,
  password: cockDb_PASSWORD,
  host: cockDb_HOST,
  post: cockDb_PORT,
  database: cockDb_DATABASE,
  logging: false,
});
//Creating CockDB table
const DSA = sequelize.define('dsa',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement :true,
    primaryKey: true,
  },
  question: {
    type: Sequelize.TEXT,
  }
  answer: {
    type: Sequelize.TEXT,
  }

});
app.use(express.static(path.join(__dirname, "build")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-API-KEY"
  );
  next();
});

app.get("/symbl-token", async (req, res) => {
  try {
    const response = await fetch(`${symblApiBasePath}/oauth2/token:generate`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        type: "application",
        appId: symblAppId,
        appSecret: symblAppSecret,
      }),
    });
    res.json(await response.json()).end();
  } catch (e) {
    console.error("Error while issuing Symbl Token.", e);
    res
      .status(401)
      .json({
        message: e.toString(),
      })
      .end();
  }
});

app.get("/twilio-token", (req, res) => {
  const { identity, roomName } = req.query;
  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKeySID,
    twilioApiKeySecret,
    {
      ttl: MAX_ALLOWED_SESSION_DURATION,
    }
  );
  token.identity = identity;
  const videoGrant = new VideoGrant({ room: roomName });
  token.addGrant(videoGrant);
  res.send(token.toJwt());
  console.log(`issued token for ${identity} in room ${roomName}`);
});

app.get("*", (_, res) =>
  res.sendFile(path.join(__dirname, "build/index.html"))
);

app.listen(8081, () => console.log("token server running on 8081"));
