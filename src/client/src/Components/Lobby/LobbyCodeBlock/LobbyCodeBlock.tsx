import React from "react";
import "./LobbyCodeBlock.scss";
import { socket } from "../../../service/socket";
import { codeBlockData } from "../../../models/codeBlockData";

const LobbyCodeBlock = (props: Partial<codeBlockData>) => {
  const joinRoom = () => {
    console.log(props.id)
    socket.emit("join-room", props.id);
  };

  return (
    <>
      <div className="code-block" onClick={joinRoom}>
        <div className="code-block-title">
          <h3>{props.title}</h3>
        </div>
        <hr />
        <div className="code-snippet">{props.code}</div>
      </div>
    </>
  );
};

export default LobbyCodeBlock;
