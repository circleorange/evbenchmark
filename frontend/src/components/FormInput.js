import React, {useState} from "react";

const FormInput = ({label, placeholder, type="text", disabled=false}) => {
    const labelPosition = "absolute left-3 top-2";
    const labelEffects = "transition-all duration-200 transform";
    const labelFloating = "-translate-y-7 scale-75 text-blue-600";
    const labelGrounded = "text-gray-500";

    const inputSize = "w-full h-10 px-4 py-3";
    const inputBorder = "border border-gray-300 focus:border-blue-300";
    const inputShape = "rounded-full";
    const inputEffects = "focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200";

    const fieldDiv = "relative w-80 mb-4";

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => !value && setIsFocused(false);

    return (
        <div className={`${fieldDiv}`}>
            <label className={`${labelPosition} ${labelEffects} ${isFocused || value
                ? labelFloating : labelGrounded }`}
            >{label}</label>
            <input type={type}
                   value={value}
                   placeholder={isFocused ? placeholder : ''}
                   className={`${inputSize} ${inputBorder} ${inputShape} ${inputEffects}`}
                   disabled={disabled}
                   onBlur={handleBlur}
                   onFocus={handleFocus}
                   onChange={(e) => setValue(e.target.value)} />
        </div>

    );
};

export default FormInput;
