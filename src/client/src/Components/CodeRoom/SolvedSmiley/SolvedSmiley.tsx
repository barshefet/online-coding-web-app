import React from "react";
import './SolvedSmiley.scss'

const SolvedSmiley = (props: any) => {
    //Componnent apears only when a code block has been solved
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