//TODO: check for solution 

import React from "react";
import "./CodeBlock.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { socket } from "../../../service/socket";
import { Editor } from "../../../models/editor";

const CodeBlock = (props: Editor) => {
  //When a "student" client is changing the code, it's string is emmited to all clients who attend the code room
  const onChange = (data: string) => {
    props.setCode(data);
    socket.emit("code-update", data, props.id);
  };

  return (
    <>
      <CodeMirror
        className="room-code-block-editor"
        theme={vscodeDark}
        extensions={[javascript({ jsx: true })]}
        value={props.code}
        onChange={(data) => onChange(data)}
        //readOnly according to mentor state 
        readOnly={props.mentor}
      />
    </>
  );
};

export default CodeBlock;
