import express from "express";
import http from "http";
import { Server } from "socket.io";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(cors);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_HOSTED_URL, // Update with your Vite app's URL
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
const userSocketMap = {};
function getAllConnectedClients(roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        userName: userSocketMap[socketId],
      };
    }
  );
}
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  // Listening on join
  socket.on(process.env.JOIN, ({ roomId, userName }) => {
    userSocketMap[socket.id] = userName;
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    clients.forEach(({ socketId }) => {
      // emiting on joined
      io.to(socketId).emit(process.env.JOINED, {
        clients,
        userName,
        socketId,
      });
    });
  });

  socket.on(process.env.CODE_CHANGE, ({ roomId, code }) => {
    socket.in(roomId).emit(process.env.CODE_CHANGE, { code });
  });
  socket.on(process.env.SYNC_CODE, ({ socketId, code }) => {
    io.to(socketId).emit(process.env.CODE_CHANGE, { code });
  });

  socket.on(process.env.DISCONNECTING, () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.in(roomId).emit(process.env.DISCONNECTED, {
        socketId: socket.id,
        userName: userSocketMap[socket.id],
      });
    });
    delete userSocketMap[socket.id];
    socket.leave();
  });
});
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`server working on port ${port}`);
});
