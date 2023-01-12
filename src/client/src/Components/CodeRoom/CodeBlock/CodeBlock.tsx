import React from "react";
import "./CodeBlock.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { Code } from "../../../models/Code";
import { socket } from "../../../service/socket";

const CodeBlock = (props: Code) => {
  const onChange = (data: string) => {
    props.setValue(data);
    socket.emit("code-update", data)
    console.log(data);
  };
  return (
    <>
      <CodeMirror
        className="room-code-block-editor"
        theme={vscodeDark}
        extensions={[javascript({ jsx: true })]}
        value={props.value}
        onChange={(data) => onChange(data)}
        readOnly={props.mentor}
      />
    </>
  );
};

export default CodeBlock;
