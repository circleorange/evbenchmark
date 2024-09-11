import React from "react";
import {blueButton, shape} from "../brandStyles";

const BlockButton = ({label, onClick}) => {
    const dimensions = "w-full h-10 px-6 py-3";
    return (
        <button className={`${dimensions} ${blueButton} ${shape}`}
                onClick={onClick}
        >{label}</button>
    );
};

export default BlockButton;
