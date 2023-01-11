import React from "react";
import { mentor } from "../../models/mentor";
import './CodeRoom.scss'

const CodeRoom = (props: mentor) => {
    return props.mentor ? (
        <>
        <div className="code-room-container">
            <div className="code-room-title"><h1>Code block number 1</h1></div>
            <div className="room-code-block">{'const siri = () => {skdefuedf}'}</div>
        </div>
        </>
    ) : (
        <>
         <div className="code-room-container">
            <div className="code-room-title"><h1>Code block number 2</h1></div>
            <div className="room-code-block"><input type="text" value={'const'} /></div>
        </div>
        </>
    )
}

export default CodeRoom