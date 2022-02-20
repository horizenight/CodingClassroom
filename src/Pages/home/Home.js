import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="navbar">
        <div className="logo">
          <img src="./images/symbol.png" alt="brand-logo"></img>
          Coding Classroom
        </div>
        <ul className="list">
          <li>
            <Link to="/welcome">Home</Link>
          </li>
          <li>
            <Link to="/classroom">Classroom</Link>
          </li>
          <li>
            <Link to="/">Video</Link>
          </li>
          <li>
            <Link to="/coding">Editor</Link>
          </li>
        </ul>
      </div>
      <div className="header">
        <div className="header-text">
          <div className="header-head">Coding with Community !</div>
          <div className="header-desc">
            <p>
              {" "}
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
              ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
            </p>
          </div>
        </div>
        <div className="header-img">
          <img src="./images/logo-black.png" alt="bhal"></img>
        </div>
      </div>

      <div className="features">
        <h1 className="home-heading-hollow"> &lt; Features /&gt;</h1>
        <div className="cards-con">
          <div className="neo-card-1">
            <h3>This is Sample</h3>
            <p>
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
              ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
            </p>
          </div>
          <div className="neo-card-1">
            <h3>This is Sample</h3>
            <p>
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
              ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
            </p>
          </div>
          <div className="neo-card-1">
            <h3>This is Sample</h3>
            <p>
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
              ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
            </p>
          </div>
        </div>
        <div className="cards-con">
          <div className="neo-card-1">
            <h3>This is Sample</h3>
            <p>
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
              ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
            </p>
          </div>
          <div className="neo-card-1">
            <h3>This is Sample</h3>
            <p>
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
              ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
            </p>
          </div>
          <div className="neo-card-1">
            <h3>This is Sample</h3>
            <p>
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
              ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
            </p>
          </div>
        </div>
      </div>
      <div className="features">
        <h1 className="home-heading-hollow"> &lt; Tech-Stack /&gt;</h1>
        <div className="tech-con">
          <div className="neo-card-1">
            <a href="https://reactjs.org/">
              <img src="./images/react-icon.png"></img>
              <h3>React</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://mui.com/">
              <img src="./images/material-con.png"></img>
              <h3>Material UI</h3>
            </a>
          </div>

          <div className="neo-card-1">
            <a href="https://www.twilio.com/docs/usage/api">
              <img src="./images/twilio-icon.png"></img>
              <h3>Twilio API</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://nodejs.org/">
              <img src="./images/node-icon.svg"></img>
              <h3>NODE JS</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://www.cockroachlabs.com/">
              <img src="./images/cock-icon.svg"></img>
              <h3>Cock-DB</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://github.com/">
              <img src="./images/symbol-icon.png"></img>
              <h3>Symbol AI</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://www.netlify.com/">
              <img src="./images/netlify-icon.png"></img>
              <h3>Netlify</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://www.github.com/">
              <img src="./images/git-icon.png"></img>
              <h3>Github</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://firebase.google.com/">
              <img src="./images/fire-icon.png"></img>
              <h3>Firestore</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://rapidapi.com/judge0-official/api/judge0-ce">
              <img src="./images/rapid-icon.png"></img>
              <h3>Rapid API</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://www.expressjs.com/">
              <img src="./images/ex-icon.png"></img>
              <h3>Express</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://godaddy.com/">
              <img src="./images/go-icon.png"></img>
              <h3>Godaddy</h3>
            </a>
          </div>
          <div className="neo-card-1">
            <a href="https://sass-lang.com/">
              <img src="./images/sass-icon.png"></img>
              <h3>SASS</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="features">
        <h1 className="home-heading-hollow"> &lt; Problems Solved /&gt;</h1>
        <div className="problem-card-con">
          <div className="problem-img-con">
            <img src="./images/logo-black.png" alt="bhal"></img>
          </div>
          <div className="problem-card-con-l">
            <div className="neo-card-1">
              <h3>This is Sample</h3>
              <p>
                Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
                ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb
                a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              </p>
            </div>
            <div className="neo-card-1">
              <h3>This is Sample</h3>
              <p>
                Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
                ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb
                a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              </p>
            </div>
          </div>
        </div>
        <div className="problem-card-con">
          <div className="problem-card-con-l">
            <div className="neo-card-1">
              <h3>This is Sample</h3>
              <p>
                Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
                ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb
                a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              </p>
            </div>
            <div className="neo-card-1">
              <h3>This is Sample</h3>
              <p>
                Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
                ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb
                a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              </p>
            </div>
          </div>
          <div className="problem-img-con">
            <img src="./images/logo-black.png" alt="bhal"></img>
          </div>
        </div>
      </div>
      <div className="features">
        <h1 className="home-heading-hollow"> &lt; Developers /&gt;</h1>
        <div className="dev-con">
          <div className="neo-card-1">
            <h3>Pranjal Goyal</h3>
            <img src="./images/pranjal.jpg"></img>
            <p>
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
              ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
            </p>
          </div>
          <div className="neo-card-1">
            <h3>Kshitij Roodkee</h3>
            <img src="./images/kshitij.png"></img>
            <p>
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch
              ahdbc hahadbc aahdcb a Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
              Lorem Gipsum hjdbch ahdbc hahadbc aahdcb a
            </p>
          </div>
        </div>
      </div>
      <div className="footer">Made with ❤ | © CodeClassroom 2022</div>
    </div>
  );
};

export default Home;
