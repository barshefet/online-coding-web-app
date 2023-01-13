import React from "react";
import "./CodeBlock.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { socket } from "../../../service/socket";
import { Editor } from "../../../models/editor";

const CodeBlock = (props: Editor) => {
  const onChange = (data: string) => {
    props.setCode(data);
    socket.emit("code-update", data, props.id);
    console.log(data);
  };

  return (
    <>
      <CodeMirror
        className="room-code-block-editor"
        theme={vscodeDark}
        extensions={[javascript({ jsx: true })]}
        value={props.code}
        onChange={(data) => onChange(data)}
        readOnly={props.mentor}
      />
    </>
  );
};

export default CodeBlock;
