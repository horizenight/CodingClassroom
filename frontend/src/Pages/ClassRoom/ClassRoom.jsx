import React from "react";
import { useState, useContext } from "react";
import "./Class.css";
import { v4 as uuidv4 } from "uuid";
import { generateUsername } from "unique-username-generator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { navbarContext } from "../../context/NavbarContext";
import { useEffect } from "react";

const ClassRoom = () => {
  const [navState, setNavState] = useContext(navbarContext);
  useEffect(() => {
    setNavState(true);
  }, []);
  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const rmndUserName = generateUsername(" ");
    setRoomId(newId);
    setUserName(rmndUserName);
    console.log(newId);
    notify();
  };
  const OnEnterPressed = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  const joinRoom = () => {
    if (!userName || !roomId) {
      toast.error("Enter RoomID and Username");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };
  const notify = () =>
    toast.success("New RoomId created Successfully !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="classroom">
      <div className="main">
        Welcome OnBoard
        <div className="sub-text">Paste invitaion room id and click Join</div>
        <form>
          <input
            placeholder="Room ID"
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            value={roomId}
            onKeyUp={OnEnterPressed}
          ></input>
          <input
            placeholder="Enter User Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            onKeyUp={OnEnterPressed}
          ></input>
          <button className="coding-button" onClick={joinRoom}>
            Join Room
          </button>
        </form>
        If you don't have an invite, then create{" "}
        <a href="#" onClick={createNewRoom}>
          {" "}
          Create New
        </a>
      </div>
    </div>
  );
};

export default ClassRoom;
