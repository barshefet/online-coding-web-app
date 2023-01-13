//TODO: return button with socket disconection

import React, { useState } from "react";
import CodeBlock from "./CodeBlock/CodeBlock";
import "./CodeRoom.scss";
import { useNavigate } from "react-router-dom";
import { socket } from "../../service/socket";
import { codeBlockData } from "../../models/codeBlockData";
import { Mentor } from "../../models/mentor";

const CodeRoom = (props: Partial<Mentor>) => {
  const [title, setTitle] = useState("");
  const [solution, setSolution] = useState("");
  const [value, setValue] = useState("");
  const [id, setId] = useState("")

  socket.on("first-update", (data: codeBlockData) => {
    setTitle(data.title);
    setValue(data.code);
    setSolution(data.solution);
    setId(data.id)
  });

  socket.on("update", (msg: string) => {
    setValue(msg);
  });

  const navigate = useNavigate();

  const returnToLobby = () => {
    navigate("/");
    //TODO: disconnect
  };

  return (
    <>
      <div className="code-room-container">
        <div className="code-room-title">
          <h1>{title}</h1>
        </div>
        <div className="room-code-block">
          <CodeBlock
            id = {id}
            mentor={props.mentor}
            code={value}
            setCode={setValue}
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
