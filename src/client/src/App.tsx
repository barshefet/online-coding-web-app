import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Lobby from "./Components/Lobby/Lobby";
import CodeRoom from "./Components/CodeRoom/CodeRoom";
import "./App.scss";
import { BlobOptions } from "buffer";

function App() {
  const [mentor, setMentor] = useState(true) 
  return (
    <>
      <Routes>
        <Route path="/" element={<Lobby setMentor={setMentor}/>} />
        <Route path="/code-room" element={<CodeRoom mentor={mentor}/>}/>
      </Routes>
    </>
  );
}

export default App;
