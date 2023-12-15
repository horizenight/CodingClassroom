import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="video-main">
      <div className="video-heading"> &lt;Video Tutorial/&gt;</div>
      <div className="discription">
        Video Tutorial of the app and how to setup it locally{" "}
      </div>
      <iframe
        width="1223"
        height="688"
        src="https://www.youtube.com/embed/smregH5X_uc"
        title="Coding Classroom RTC Coding Platform | Setup and Tutorial | MLH Fellowship Project Showcase"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
