import React, { useContext } from "react";
import { navbarContext } from "../../context/NavbarContext";
import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

const Home = () => {
  const [navState, setNavState] = useContext(navbarContext);
  useEffect(() => {
    setNavState(true);
  }, []);
  return (
    <div className="home">
      <div className="header">
        <div className="header-text">
          <div className="header-head">Coding with Community !</div>
          <div className="header-desc">
            <p>
              {" "}
              A web application that allows any users who enter the call late to
              be able to see and save the past transcript. Users will be able to
              take their time and look at the transcript of previous
              conversation.
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
            <h3>Scalable Tech 💻</h3>
            <p>
              Setting up the server and the routes using express. Fetching data
              from an API using a Node.js call and displaying it to the
              client-side
            </p>
          </div>
          <div className="neo-card-1">
            <h3>Coding made Fun 🎉</h3>
            <p>
              you get a bunch of random questions to practice on. While on the
              right side, there is an editor to write your code on. Here, you
              can select your preferred coding language from the dropdown list.
            </p>
          </div>
          <div className="neo-card-1">
            <h3>Eye Loving UI 👀</h3>
            <p>
              React.JS to design the website, canva to design our project
              banner, figma to create slideshow for our project presentation
            </p>
          </div>
        </div>
        <div className="cards-con">
          <div className="neo-card-1">
            <h3>Stay Connected 👩🏻‍🤝‍🧑🏼</h3>
            <p>
              WebRTC-powered voice and video calling API from Twilio and spent
              so much time reading through the given documentation from the
              sponsors and watching speaker sessions to learn how to use it.
            </p>
          </div>
          <div className="neo-card-1">
            <h3>Future Ready 🥳</h3>
            <p>
              When the host starts the call/meeting, the platform will start to
              save the live transcript and it allows any users who enter the
              call late to be able to see the transcript of previous
              conversation.
            </p>
          </div>
          <div className="neo-card-1">
            <h3>Transcript's 📃</h3>
            <p>
              Transcripts are excellent companions to notes. If people missed
              any information, they can take a look at the transcript again
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
              <img src="./images/cock-db.svg"></img>
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
              <h3>Peer Programing ✍</h3>
              <p>
                The pandemic has been a challenge for all of us and since we
                didn’t get to meet our friends like the pre-covid days, we
                devised new ways of keeping contact with them.
              </p>
            </div>
            <div className="neo-card-1">
              <h3>All in One 💣</h3>
              <p>
                Our Code Editor has multiple languages support with DSA
                questions tab inbuilt. So are an combination of
                VideoRTC-CodeEditor-Classroom-Question-SPA
              </p>
            </div>
          </div>
        </div>
        <div className="problem-card-con">
          <div className="problem-card-con-l">
            <div className="neo-card-1">
              <h3>Pandamic Proof 🦠</h3>
              <p>
                No matter where you are never miss out on coding, with our
                inbuild code editor and web RTC solution and Typescript saving
                feature
              </p>
            </div>
            <div className="neo-card-1">
              <h3>Lite Runtime 🎈</h3>
              <p>
                Get rid of multiple apps and platform beacuse we have merged for
                you all the Spicy features of top giants into one.
              </p>
            </div>
          </div>
          <div className="problem-img-con">
            <img src="./images/logo-black.png" alt="bhal"></img>
          </div>
        </div>
      </div>
      <div className="features">
        <h1 className="home-heading-hollow"> &lt; Developer /&gt;</h1>
        <div className="dev-con">
          <div className="neo-card-1">
          <h3>Kshitij Roodkee</h3>
            <img src="https://media.licdn.com/dms/image/C4E03AQEhm_k2Zx_4RQ/profile-displayphoto-shrink_400_400/0/1609505193313?e=1707955200&v=beta&t=rreaQFhRsrKHCqDvmW2-s2YerTajHzpv9_Ky5cDxUh4"></img>
            <p>
              I'm aspiring to become Full Stack Developer and python developer.
              Want to make the world aesthetic and cool
            </p>
          </div>
        </div>
      </div>
      <div className="footer">Made with ❤ | © CodeClassroom 2023</div>
    </div>
  );
};

export default Home;
