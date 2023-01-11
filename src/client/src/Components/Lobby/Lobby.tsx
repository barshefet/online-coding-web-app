import React from "react";
import "./Lobby.scss";

const Lobby = () => {
  return (
    <>
      <div className="lobby-container">
        <div className="title">
            <h1>Welcome,</h1>
          <h1>Choose a Code Block</h1>
        </div>
        <div className="code-container">
          <div className="code-block">1</div>
          <div className="code-block">2</div>
          <div className="code-block">3</div>
          <div className="code-block">4</div>
        </div>
      </div>
    </>
  );
};

export default Lobby;
