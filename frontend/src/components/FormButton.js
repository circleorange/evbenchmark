import React from "react";

const FormButton = ({label, onClick}) => {
    return (
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                onClick={onClick}
        >{label}</button>
    );
};

export default FormButton;
