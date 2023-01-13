import React from "react";
import "./LobbyCodeBlock.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { socket } from "../../../service/socket";
import { codeBlockData } from "../../../models/codeBlockData";

const LobbyCodeBlock = (props: Partial<codeBlockData>) => {
  const joinRoom = () => {
    console.log(props.id)
    socket.emit("join-room", props.id);
  };

  return (
    <>
      <div className="code-block" onClick={joinRoom}>
        <div className="code-block-title">
          <h3>{props.title}</h3>
        </div>
        <hr />
        <div className="code-snippet">
          <CodeMirror 
          className="lobby-code-block-readonly"
          theme={vscodeDark}
          extensions={[javascript({ jsx: true })]}
          value={props.code}
          readOnly={true}
          />
        </div>
      </div>
    </>
  );
};

export default LobbyCodeBlock;
