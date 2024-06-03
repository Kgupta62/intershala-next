import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MyApplication = () => {
    const router = useRouter();
    const { isAuthenticated, student } = useSelector(
        (state) => state.StudentReducer
    );
    const { jobs, internships } = student;

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated]);

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-8">INTERSHALA</h1>
            <div className="max-w-3xl w-full">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Jobs List</h2>
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {jobs && jobs.length > 0 ? (
                                jobs.map((job) => (
                                    <li key={job._id}>
                                        <div className="px-4 py-4 sm:px-6">
                                            <p className="text-lg font-semibold text-blue-600">{job.title}</p>
                                            <p className="text-sm text-gray-500 mt-1">{job.description}</p>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li>
                                    <div className="px-4 py-4 sm:px-6">
                                        <p className="text-lg text-gray-600">No jobs available. Sorry!</p>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-3xl font-bold mb-4">Internships List</h2>
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {internships && internships.length > 0 ? (
                                internships.map((internship) => (
                                    <li key={internship._id}>
                                        <div className="px-4 py-4 sm:px-6">
                                            <p className="text-lg font-semibold text-blue-600">{internship.title}</p>
                                            <p className="text-sm text-gray-500 mt-1">{internship.description}</p>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li>
                                    <div className="px-4 py-4 sm:px-6">
                                        <p className="text-lg text-gray-600">No internships available. Sorry!</p>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="mt-8">
                    <button onClick={handleBack} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none">
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyApplication;
