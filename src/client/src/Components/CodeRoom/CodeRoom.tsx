import React, { useState } from "react";
import CodeBlock from "./CodeBlock/CodeBlock";
import "./CodeRoom.scss";
import { useNavigate } from "react-router-dom";
import { socket } from "../../service/socket";
import { codeBlockData } from "../../models/codeBlockData";
import { Mentor } from "../../models/mentor";

const CodeRoom = (props: Partial<Mentor>) => {
  const navigate = useNavigate();

  //States of the code block on display
  const [title, setTitle] = useState("");
  const [solution, setSolution] = useState("");
  const [value, setValue] = useState("");
  const [id, setId] = useState("");

  //When the client joins the code room, It recieves a "first-update" which is the whole code block and not parts of it
  //the first update sets the title, code, solution and Id

  socket.on("first-update", (data: codeBlockData) => {
    setTitle(data.title);
    setValue(data.code);
    setSolution(data.solution);
    setId(data.id);
  });

  //Every time a "student" client is changing the code an update is dispatched to all room attendants.
  //The update contains only the code since everything else doesnt change
  socket.on("update", (msg: string) => {
    setValue(msg);
    console.log(msg)
  });

  //The function is called when the return button is clicked. It then navigates to the Lobby page.
  const returnToLobby = () => {
    navigate("/");
  };

  return (
    <>
      <div className="code-room-container">
        <div className="code-room-title">
          <h1>{title}</h1>
        </div>
        <div className="room-code-block">
          <CodeBlock
            id={id}
            mentor={props.mentor}
            code={value}
            setCode={setValue}
            solution={solution}
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
