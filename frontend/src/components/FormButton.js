import React from "react";
import {blueButton, buttonSize, shape} from "../brandStyles";

const FormButton = ({label, onClick}) => {
    return (
        <button className={`${buttonSize} ${blueButton} ${shape}`}
                onClick={onClick}
        >{label}</button>
    );
};

export default FormButton;
