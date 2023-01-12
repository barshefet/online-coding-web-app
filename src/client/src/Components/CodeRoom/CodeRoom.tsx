//TODO: return button with socket disconection

import React from "react";
import CodeBlock from "./CodeBlock/CodeBlock";
import "./CodeRoom.scss";
import { Code } from "../../models/Code";

const CodeRoom = (props: Code) => {
  return (
    <>
      <div className="code-room-container">
        <div className="code-room-title">
          <h1>Code block number 1</h1>
        </div>
        <div className="room-code-block">
          <CodeBlock mentor={props.mentor} value={props.value} setValue={props.setValue}/>
        </div>
      </div>
      <div className="return-button">
        <img src="images/return1.png" alt="return" />
      </div>
    </>
  ) 
};

export default CodeRoom;
