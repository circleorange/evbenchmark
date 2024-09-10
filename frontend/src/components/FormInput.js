import React from "react";

const FormInput = ({placeholder, value, onChange}) => {
    return (
        <input type="text"
               className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-300 transition-colors"
               placeholder={placeholder}
               value={value}
               onChange={onChange}
        />
    );
};

export default FormInput;
