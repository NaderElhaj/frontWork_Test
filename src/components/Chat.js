import React from "react";
import "./Chat.css";
import PropTypes from 'prop-types';

export default function Chat({
  backgroundColor = "#4643D3",
  size = "md",
  avatar = "/images/avatar.png",
  name = "Emily Dougrer",
  job = "Developer",
  message = "Hi there.We use Boards to share initial goals and ideas.",
}) {
  let scale = 1;
  if (size === "sm") scale = 1;
  if (size === "md") scale = 1.25;
  if (size === "lg") scale = 1.5;
  const style = {
    border: "none",
    width: `${scale*375}px`,
  };
  const chatTopStyle = {
    backgroundColor,
    padding: ` ${scale * 22}px ${scale * 32}px `,
    borderRadius: "24px 24px 0px 0px",
  };

  const chatUserStyle = {
    display: "flex",
    alignItems: "center",
  };
  const chatMessage = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: "#FFFFFF",
    paddingTop: "17px",
  };
  const AvatarNameStyle = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingLeft: "15px",
  };
  const avatarStyle = {
    borderRadius: "50%",
    width: "48px",
    height: "48px",
  };
  const nameStyle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    color: "#FFFFFF",
    lineHeight: "22px",
    margin: "0",
  };
  const jobStyle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    color: "#FFFFFF",
    opacity: "0.5",
    margin: "0",
  };
  const chatBottomStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "0px 0px 24px 24px",
    display:"flex",
    padding:`${scale * 18}px ${scale * 22}px `,
    justifyContent:"space-between"

  };
  const inputStyle = {
    backgroundColor: "#ffffff",
    outline: "none",
    border: "none",
  };
  const buttonStyle = {
    backgroundColor: "#ffffff",
    outline: "none",
    border: "none",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "18px",
   
    color: "#5856D7",
  };

  return (
    <div style={style}>
      <div style={chatTopStyle}>
        <div style={chatUserStyle}>
          <img src={avatar} alt="Avatar Photo" style={avatarStyle} />
          <div style={AvatarNameStyle}>
            <p style={nameStyle}>{name}</p>
            <p style={jobStyle}>{job}</p>
          </div>
        </div>
        <div style={chatMessage}> {message}</div>
      </div>
      <div style={chatBottomStyle}>
        <input
          type="text"
          style={inputStyle}
          placeholder="Type your message..."
          className="input"
        />
        <button style={buttonStyle}>Send</button>
      </div>
    </div>
  );
}

Chat.prototype = {
    backgroundColor : PropTypes.string , 
    avatar : PropTypes.string,
    name : PropTypes.string,
    job : PropTypes.string,
    message : PropTypes.string,
    size : PropTypes.oneOf("sm","md","lg")
}

