import React, { useContext, useEffect, useState } from "react";
import "./Editor.css";
import { navbarContext } from "../../context/NavbarContext";
import Client from "../../Components/Client/Client";
import EditorPane from "../../Components/EditorPane/EditorPane";
import { useRef } from "react";
import { initSocket } from "../../../socket";
import { ACTIONS } from "../../utils/actions";
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import { toast } from "react-toastify";

const Editor = () => {
  const [navState, setNavState] = useContext(navbarContext);
  const [client, setClient] = useState([]);
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  useEffect(() => {
    setNavState(false);
    async function init() {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error", e);
        toast.error("Socket Connection failed Connecting Again");
      }
      // Establish connections
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: location.state?.userName,
      });
      // listening for joined
      socketRef.current.on("joined", ({ clients, userName, socketId }) => {
        if (userName !== location.state.username) {
          toast.success(`${userName} joined the room`);
          console.log(`${userName} joined the room`);
        }
        setClient(clients);
        socketRef.current.emit("sync-code", {
          code: codeRef.current,
          socketId,
        });
      });
      // Listening for disconting
      socketRef.current.on("disconnected", ({ socketId, userName }) => {
        toast.warning(`${userName} left the room`);
        setClient((prev) => {
          return prev.filter((client) => client.socketId !== socketId);
        });
      });
    }
    init();
    // Clean up function
    return () => {
      socketRef.current.disconnect();
      socketRef.current.off("joined");
      socketRef.current.off("disconnected");
    };
  }, []);

  if (!location.state.userName) {
    <Navigate to="/" />;
  }
  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success("Room ID copied to clipboard");
    } catch (err) {
      toast.error("Error while copying room id");
    }
  }
  function leaveRoomId() {
    toast.success("You left the room");
    return reactNavigator("/classroom");
  }
  return (
    <div className="editor-main">
      <div className="editor-control">
        <div className="editor-logo">
          <img src="/favicon.png"></img>
          Coding Classroom
        </div>
        <div className="editor-list">
          {client.map((client) => {
            return (
              <Client username={client.userName} key={client.socketId}></Client>
            );
          })}
        </div>
        <div className="editor-btn">
          <button onClick={copyRoomId}>Copy Room ID</button>
          <button onClick={leaveRoomId}>Leave Room</button>
        </div>
      </div>

      <div className="editor-window">
        <EditorPane
          socketRef={socketRef}
          roomId={roomId}
          onCodeChange={(code) => {
            codeRef.current = code;
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
