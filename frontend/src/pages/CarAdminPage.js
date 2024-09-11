import React, {useState} from "react";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import BlockInputField from "../components/BlockInputField";

const CenterForm = () => {
    const [value, setValue] = useState("");
    const handleClick = () => {
        alert("Form submitted");
    }
    const handleCancel = () => {
        alert("Cancelled changes");
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <form className="bg-white p-8 mb-8 rounded-lg shadow-md w-full max-w-5xl">
                <h2 className="text-2xl font-bold leading-tight mb-6 text-left">Search for Existing Records</h2>
                <BlockInputField label="Search Cars" placeholder="Query by make, model, year, charging ports, etc."/>
                <div className="flex space-x-4 justify-end">
                    <FormButton label="Submit" onClick={handleClick}/>
                </div>
            </form>
            <form className="bg-white p-8 mb-8 rounded-lg shadow-md w-full max-w-5xl">
                <h2 className="text-2xl font-bold leading-tight mb-6 text-center">Car Management (Admin)</h2>
                <div className="p-6 max-w-3xl mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <hr className="border-t-2 border-gray-200 my-6"/>
                        <h2 className="text-xl font-semibold mb-4">General</h2>
                        <FormInput label="Make" placeholder="Enter car make"/>
                        <FormInput label="Model" placeholder="Enter Model"/>
                        <FormInput label="Minimum Price" placeholder="Enter the minimum price"/>
                        <FormInput label="Maximum Price" placeholder="Enter the maximum price"/>
                        <FormInput label="Year" placeholder="Enter the production year"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <hr className="border-t-2 border-gray-200 my-6"/>
                        <h2 className="text-xl font-semibold mb-4">Performance</h2>

                        <FormInput label="Max Speed" placeholder="Enter max speed"/>
                        <FormInput label="0-100 Time" placeholder="Enter the acceleration to 100 km/h"/>
                        <FormInput label="Power" placeholder="Enter the horse power"/>
                        <FormInput label="Torque" placeholder="Enter the torque"/>
                        <FormInput label="Drive Type" placeholder="Enter the drive type (RWD, FWD, AWD)"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <hr className="border-t-2 border-gray-200 my-6"/>
                        <h2 className="text-xl font-semibold mb-4">Battery</h2>

                        <FormInput label="Range" placeholder="Enter battery range"/>
                        <FormInput label="Battery Capacity" placeholder="Enter battery capacity"/>
                        <FormInput label="Battery Type" placeholder="Enter battery type"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <hr className="border-t-2 border-gray-200 my-6"/>
                        <h2 className="text-xl font-semibold mb-4">Charging</h2>

                        <FormInput label="Charge Time" placeholder="Enter charge time 20-80"/>
                        <FormInput label="Charge Speed" placeholder="Enter charge speed"/>
                        <FormInput label="Charge Port" placeholder="Enter available charging ports"/>
                        <FormInput label="Charge Power" placeholder="Enter charge power"/>
                    </div>
                </div>
                <div className="flex space-x-4 justify-end">
                    <FormButton label="Submit" onClick={handleClick}/>
                    <FormButton label="Cancel" onClick={handleCancel}/>
                </div>
            </form>
        </div>
    )
}

export default CenterForm;
