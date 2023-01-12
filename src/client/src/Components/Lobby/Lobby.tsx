import React, { useEffect } from "react";
import "./Lobby.scss";
import LobbyCodeBlock from "./LobbyCodeBlock/LobbyCodeBlock";
import { Mentor } from "../../models/mentor";

const Lobby = (props: Partial<Mentor>) => {


  
  useEffect(()=>{
    fetch("http://localhost:4000/code-blocks")
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  
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
