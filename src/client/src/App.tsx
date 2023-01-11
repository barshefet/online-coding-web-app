import React from "react";
import { Routes, Route } from "react-router-dom";
import Lobby from "./Components/Lobby/Lobby";
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lobby />} />
      </Routes>
    </>
  );
}

export default App;
