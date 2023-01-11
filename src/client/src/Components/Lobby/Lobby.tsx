import React from "react";
import "./Lobby.scss";
import LobbyCodeBlock from "./LobbyCodeBlock/LobbyCodeBlock";

const Lobby = () => {
  return (
    <>
      <div className="lobby-container">
        <div className="title">
            <h1>Welcome,</h1>
          <h1>Choose a Code Block</h1>
        </div>
        <div className="code-container">
          <LobbyCodeBlock />
          <LobbyCodeBlock />
          <LobbyCodeBlock />
          <LobbyCodeBlock />
        </div>
      </div>
    </>
  );
};

export default Lobby;
