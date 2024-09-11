import React, {useState} from "react";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import BlockInputField from "../components/BlockInputField";

const CenterForm = () => {
    const formStyle = "bg-green-100 p-8 mb-8 rounded-3xl shadow-md w-full max-w-5xl";
    const formHeader = "text-2xl font-bold leading-tight mb-6 text-center";

    const [value, setValue] = useState("");
    const [isEditMode, setEditMode] = useState(false);

    const handleEditClick = (e) => {
        e.preventDefault();
        alert("Edit mode enabled");
        setEditMode(true);
    }
    const handleSubmitClick = () => {
        alert("Form submitted");
        setEditMode(false);
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        alert("Cancelled changes");
        setEditMode(false);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <form className={`${formStyle}`}>
                <h2 className={`${formHeader}`}>Search for Existing Records</h2>
                <BlockInputField label="Search Cars" placeholder="Query by make, model, year, charging ports, etc."/>
                <div className="flex space-x-4 justify-end">
                    <FormButton label="Search" onClick={handleSubmitClick}/>
                </div>
            </form>

            <form className={`${formStyle}`}>
                <h2 className={`${formHeader}`}>Car Management (Admin)</h2>
                <div className="p-6 max-w-3xl mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <hr className="border-t-2 border-gray-200 my-6"/>
                        <h2 className="text-xl font-semibold mb-4">General</h2>
                        
                        <FormInput label="Make"
                                   placeholder="Enter car make"
                                   disabled={!isEditMode} />
                        <FormInput label="Model"
                                   placeholder="Enter Model"
                                   disabled={!isEditMode} />
                        <FormInput label="Minimum Price"
                                   placeholder="Enter the minimum price"
                                   disabled={!isEditMode} />
                        <FormInput label="Maximum Price"
                                   placeholder="Enter the maximum price"
                                   disabled={!isEditMode}/>
                        <FormInput label="Year"
                                   placeholder="Enter the production year"
                                   disabled={!isEditMode} />
                        <FormInput label="Milage"
                                   placeholder="Enter car milage (km)"
                                   disabled={!isEditMode} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <hr className="border-t-2 border-gray-200 my-6"/>
                        <h2 className="text-xl font-semibold mb-4">Performance</h2>

                        <FormInput label="Max Speed"
                                   placeholder="Enter max speed"
                                   disabled={!isEditMode} />
                        <FormInput label="0-100 Time"
                                   placeholder="Enter the acceleration to 100 km/h"
                                   disabled={!isEditMode} />
                        <FormInput label="Power"
                                   placeholder="Enter the horse power"
                                   disabled={!isEditMode} />
                        <FormInput label="Torque"
                                   placeholder="Enter the torque"
                                   disabled={!isEditMode} />
                        <FormInput label="Efficiency Rating"
                                   placeholder="Enter efficiency rating of the car"
                                   disabled={!isEditMode} />
                        <FormInput label="Drive Type"
                                   placeholder="Enter the drive type (RWD, FWD, AWD)"
                                   disabled={!isEditMode} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <hr className="border-t-2 border-gray-200 my-6"/>
                        <h2 className="text-xl font-semibold mb-4">Battery</h2>

                        <FormInput label="Minimum Range"
                                   placeholder="Enter battery range in cold weather"
                                   disabled={!isEditMode} />
                        <FormInput label="Maximum Range"
                                   placeholder="Enter battery range in ideal conditions"
                                   disabled={!isEditMode}/>
                        <FormInput label="Battery Capacity"
                                   placeholder="Enter battery capacity"
                                   disabled={!isEditMode} />
                        <FormInput label="Battery Type"
                                   placeholder="Enter battery type"
                                   disabled={!isEditMode} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <hr className="border-t-2 border-gray-200 my-6"/>
                        <h2 className="text-xl font-semibold mb-4">Charging</h2>

                        <FormInput label="Charge Time"
                                   placeholder="Enter charge time 20-80"
                                   disabled={!isEditMode} />
                        <FormInput label="Charge Speed"
                                   placeholder="Enter charge speed"
                                   disabled={!isEditMode} />
                        <FormInput label="Charge Port"
                                   placeholder="Enter available charging ports"
                                   disabled={!isEditMode} />
                        <FormInput label="Charge Power"
                                   placeholder="Enter charge power"
                                   disabled={!isEditMode} />
                    </div>
                </div>

                <div className="flex space-x-4 justify-end">
                    {isEditMode ? (
                        <>
                            <FormButton label="Submit" onClick={handleSubmitClick}/>
                            <FormButton label="Cancel" onClick={handleCancelClick}/>
                        </>
                    ) : (
                        <FormButton label="Edit" onClick={handleEditClick}/>
                    )}
                </div>
            </form>
        </div>
    )
}

export default CenterForm;
