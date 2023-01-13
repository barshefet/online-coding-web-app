import React from "react";
import './SolvedSmiley.scss'

const SolvedSmiley = (props: any) => {
return props.solved ?(
    <>
    <img className="solved" src="images/smiley.png" alt="solved" />
    </>
) : (
    <>
    </>
)
}


export default SolvedSmiley