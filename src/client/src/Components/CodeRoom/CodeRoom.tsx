//TODO: return button with socket disconection

import React from "react";
import CodeBlock from "./CodeBlock/CodeBlock";
import "./CodeRoom.scss";
import { Code } from "../../models/Code";
import { useNavigate } from "react-router-dom";

const CodeRoom = (props: Code) => {

  const navigate = useNavigate();

  const returnToLobby = () => {
    navigate('/')
    //TODO: disconnect
  };

  return (
    <>
      <div className="code-room-container">
        <div className="code-room-title">
          <h1>Code block number 1</h1>
        </div>
        <div className="room-code-block">
          <CodeBlock
            mentor={props.mentor}
            value={props.value}
            setValue={props.setValue}
          />
        </div>
      </div>
      <div className="return-button">
        <img src="images/return1.png" alt="return" onClick={returnToLobby} />
      </div>
    </>
  );
};

export default CodeRoom;
