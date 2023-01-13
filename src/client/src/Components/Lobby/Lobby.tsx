import React, { useEffect, useState } from "react";
import "./Lobby.scss";
import LobbyCodeBlock from "./LobbyCodeBlock/LobbyCodeBlock";
import { Mentor } from "../../models/mentor";
import { socket } from "../../service/socket";
import { useNavigate } from "react-router-dom";
import { codeBlockData } from "../../models/codeBlockData";

const Lobby = (props: Partial<Mentor>) => {
  //code blocks state
  const [codeBlocks, setCodeBlocks] = useState([]);

  const navigate = useNavigate();

  //a response from the server that uproves to navigate to code-room page and sets the mentor state accordingly
  socket.on("room-aproved", (isMentor: boolean) => {
    props.setMentor!(isMentor);
    navigate("/code-room");
  });

  //when the page first loads up a request for all the code blocks is emitted to the server
  useEffect(() => {
    socket.emit("getAllCodeBlocks");
  }, []);

  //return from the server with an array of code blocks
  socket.on("allCodeBlocks", (data) => {
    setCodeBlocks(data);
  });
  return (
    <>
      <div className="lobby-container">
        <div className="title">
          <h1>Welcome,</h1>
          <h1>Choose a Code Block</h1>
        </div>
        <div className="code-container">
          {codeBlocks.map((codeBlock: codeBlockData, index: number) => (
            <LobbyCodeBlock
              key={`lobby-code-block-${index}`}
              id={codeBlock.id}
              code={codeBlock.code}
              title={codeBlock.title}
              solution={codeBlock.solution}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Lobby;
