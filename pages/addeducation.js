import React, { useState } from "react";
import axios from "@/axiosconfig";
import { asyncCurrentUser } from "@/store/Actions/StudentActions";
import { useDispatch } from "react-redux";
import { redirect } from "next/dist/server/api-utils";

const AddEducation = () => {
    const dispatch = useDispatch();
    const [educationDetails, setEducationDetails] = useState({
        status: "",
        year: "",
        board: "",
        performance: "",
        school: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationDetails({
            ...educationDetails,
            [name]: value
        });
    };

    const handleAddEducation = async () => {
        try {
            const { data } = await axios.post("/resume/add-edu", educationDetails);
            dispatch(asyncCurrentUser());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 animate-pulse">Add Education</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600 text-sm font-semibold mb-1">Status</label>
                        <input
                            type="text"
                            name="status"
                            value={educationDetails.status}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-semibold mb-1">Year</label>
                        <input
                            type="text"
                            name="year"
                            value={educationDetails.year}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-semibold mb-1">Board</label>
                        <input
                            type="text"
                            name="board"
                            value={educationDetails.board}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-semibold mb-1">Performance</label>
                        <input
                            type="text"
                            name="performance"
                            value={educationDetails.performance}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-semibold mb-1">School</label>
                        <input
                            type="text"
                            name="school"
                            value={educationDetails.school}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>
                <button
                    onClick={handleAddEducation}
                    className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Add Education
                </button>
            </div>
        </div>
    );
};

export default AddEducation;
