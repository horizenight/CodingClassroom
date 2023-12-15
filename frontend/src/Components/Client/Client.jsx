import React from "react";
import "./Client.css";
import Avatar from "react-avatar";

const Client = ({ username }) => {
  return (
    <div className="client-div">
      <Avatar name={username} size="130px" round="15px"></Avatar>
      <div>{username}</div>
    </div>
  );
};

export default Client;
