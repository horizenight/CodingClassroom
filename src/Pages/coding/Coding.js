import React, { useState, useEffect } from "react";
import axios from "axios";
import "./coding.css";
import { langArray } from "./lang.js";
import { Link } from "react-router-dom";

const Coding = () => {
  const [code, setCode] = useState(null);
  const [lang, setLang] = useState(null);
  const [output, setOutput] = useState(null);
  const [input, setInput] = useState(null);

  const onBtnHandeler = async () => {
    let postTokenoptions = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "false", fields: "*", wait: true },
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        "x-rapidapi-key": "855e03e568msh1382b5d06c0bf13p102393jsna05314c9e10b",
      },
      data: {
        language_id: lang,
        source_code: code,
        // source_code: "print('Hello World')",
        stdin: input,
      },
    };

    try {
      const response = await axios.request(postTokenoptions);

      setOutput(response.data.stdout);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="coding">
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
      <h1 className="coding-heading">Code Editor</h1>
      <div className="coding-controls">
        <div className="coding-select">
          <select
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
            }}
          >
            {langArray.map((data) => (
              <option value={data.id} key={data.id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={onBtnHandeler} className="coding-button">
          Send Request
        </button>
      </div>
      <div className="coding-con">
        <div className="coding-con-code">
          <textarea
            className="code-editor-input"
            placeholder="enter code here"
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
        </div>
        <div className="coding-con-out">
          <textarea
            className="code-editor-input"
            placeholder="Enter Input here If any"
            onChange={(e) => setInput(e.target.value)}
          ></textarea>

          <textarea
            className="code-editor-output"
            placeholder="Output Screen"
            value={output}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Coding;