import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Lobby from "./Components/Lobby/Lobby";
import CodeRoom from "./Components/CodeRoom/CodeRoom";
import "./App.scss";

function App() {

  //keeps track if the client is a mentor or a student 
  const [mentor, setMentor] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Lobby setMentor={setMentor} />} />
        <Route path="/code-room" element={<CodeRoom mentor={mentor} />} />
      </Routes>
    </>
  );
}

export default App;
