//TODO: check for solution

import React, { useEffect, useState } from "react";
import "./CodeBlock.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { socket } from "../../../service/socket";
import { Editor } from "../../../models/editor";
import SolvedSmiley from "../SolvedSmiley/SolvedSmiley";

const CodeBlock = (props: Editor) => {
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      socket.emit("code-update", props.code, props.id);
    }, 250);
    return () => clearTimeout(timeout)
  }, [props.code]);

  //When a "student" client is changing the code, it's string is emmited to all clients who attend the code room
  const onChange = (data: string) => {
    props.setCode(data);

    //Determines if the block code has been solved by comparing it to the solution
    if (data === props.solution) {
      setSolved(true);
    }
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
      <SolvedSmiley solved={solved} />
    </>
  );
};

export default CodeBlock;
