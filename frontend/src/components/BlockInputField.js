import React, {useState} from "react";

const BlockInputField = ({label, placeholder, type="text"}) => {
    const labelPosition = "absolute left-3 top-2";
    const labelEffects = "transition-all duration-200 transform";

    const fieldSize = "w-full h-10 px-4 py-3"
    const fieldBorder = "border border-gray-300 focus:border-blue-300";
    const fieldShape = "rounded-full";
    const fieldEffects = "focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200";

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => !value && setIsFocused(false);

    return (
        <div className="relative w-full mb-4">
            <label className={`${labelPosition} ${labelEffects} ${isFocused || value 
                ? '-translate-y-7 scale-75 text-blue-600'
                : 'text-gray-500'}`}
            >{label}</label>
            <input type={type}
                   value={value}
                   placeholder={isFocused ? placeholder : ''}
                   className={`${fieldSize} ${fieldBorder} ${fieldShape} ${fieldEffects}`}
                   onBlur={handleBlur}
                   onFocus={handleFocus}
                   onChange={(e) => setValue(e.target.value)} />
        </div>

    );
};

export default BlockInputField;
