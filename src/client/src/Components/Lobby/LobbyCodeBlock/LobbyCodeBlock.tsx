import React from "react";
import "./LobbyCodeBlock.scss";
import { socket } from "../../../service/socket";
import { useNavigate } from "react-router-dom";
import { Mentor } from "../../../models/mentor";

const LobbyCodeBlock = (props: Partial<Mentor>) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    socket.emit("join-room", "1");
  };

  socket.on("room-aproved", (isMentor) => {
    props.setMentor!(isMentor);
    navigate("/code-room");
  });

  socket.on("room-full", () => {
    //TODO: popup there is already a mentor and a student in this room
    console.log("room is full");
  });

  return (
    <>
      <div className="code-block" onClick={joinRoom}>
        <div className="code-block-title">
          <h3>async something</h3>
        </div>
        <hr />
        <div className="code-snippet">{`const func = (x) = > {}`}</div>
      </div>
    </>
  );
};

export default LobbyCodeBlock;
