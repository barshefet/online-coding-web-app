import React from "react";
import "./LobbyCodeBlock.scss";

const LobbyCodeBlock = () => {
  return (
    <>
      <div className="code-block" onClick={()=>{}}>
        <div className="code-block-title">
          <h3>async something</h3>
        </div>
        <hr />
        <div className="code-snippet">{`const func = (x) = > {}`}</div>
      </div>
    </>
  );
};

export default LobbyCodeBlock;
