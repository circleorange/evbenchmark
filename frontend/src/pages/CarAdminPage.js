import React, {useState} from "react";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

const CenterForm = () => {
    const [value, setValue] = useState("");
    const handleClick = () => {
        alert("Form submitted");
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold leading-tight mb-6 text-center">Centered Form</h2>
                <div className="mb-4">
                    <FormInput placeholder="Enter text here"
                               value={value}
                               onChange={(e) => setValue(e.target.value)}/>
                </div>
                <FormButton label="Submit"
                            onClick={handleClick}/>
            </form>
        </div>
    )
}

export default CenterForm;
