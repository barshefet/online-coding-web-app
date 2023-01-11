import React from "react";
import "./Lobby.scss";
import LobbyCodeBlock from "./LobbyCodeBlock/LobbyCodeBlock";
import { setMentor } from "../../models/setMentor";

const Lobby = (props: setMentor) => {
  return (
    <>
      <div className="lobby-container">
        <div className="title">
            <h1>Welcome,</h1>
          <h1>Choose a Code Block</h1>
        </div>
        <div className="code-container">
          <LobbyCodeBlock setMentor={props.setMentor}/>
          <LobbyCodeBlock setMentor={props.setMentor}/>
          <LobbyCodeBlock setMentor={props.setMentor}/>
          <LobbyCodeBlock setMentor={props.setMentor}/>
        </div>
      </div>
    </>
  );
};

export default Lobby;
