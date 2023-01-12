import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Lobby from "./Components/Lobby/Lobby";
import CodeRoom from "./Components/CodeRoom/CodeRoom";
import "./App.scss";

function App() {
  const [mentor, setMentor] = useState(false)
  const [value, setValue] = useState('') 
  return (
    <>
      <Routes>
        <Route path="/" element={<Lobby setMentor={setMentor}/>} />
        <Route path="/code-room" element={<CodeRoom mentor={mentor} value={value} setValue={setValue} />}/>
      </Routes>
    </>
  );
}

export default App;
