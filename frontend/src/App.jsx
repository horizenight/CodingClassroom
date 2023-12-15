import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Home, Coding, ClassRoom } from "./Pages/index.js";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Router } from "react-router-dom";
import { navbarContext, NavbarProvider } from "./context/NavbarContext";
import Editor from "./Pages/Editor/Editor";
import Video from "./Pages/Video/Video";

function App() {
  const [navState, setNavState] = useContext(navbarContext);
  return (
    <>
      {navState && <Navbar />}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/classroom" element={<ClassRoom></ClassRoom>}></Route>
        <Route path="/coding" element={<Coding></Coding>}></Route>
        <Route path="/video" element={<Video></Video>}></Route>
        <Route path="/editor/:roomId" element={<Editor></Editor>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
