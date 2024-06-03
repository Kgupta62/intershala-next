import { asyncsignout, asyncCurrentUser } from "@/store/Actions/StudentActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "@/axiosconfig";
import Link from "next/link";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [internships, setInternships] = useState([]);
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated, student } = useSelector(
        (state) => state.StudentReducer
    );

    const GetJobs = async () => {
        try {
            const res = await axios.post("/student/alljobs");
            setJobs(res.data.jobs);
        } catch (error) {
            console.log(error);
        }
    };

    const GetInternships = async () => {
        try {
            const res = await axios.post("/student/allinternships");
            setInternships(res.data.internships);
        } catch (error) {
            console.log(error);
        }
    };

    const ApplyJob = async (id) => {
        try {
            const res = await axios.post("/student/apply/job/" + id);
            dispatch(asyncCurrentUser());
        } catch (error) {
            console.log(error);
        }
    };

    const ApplyInternship = async (id) => {
        try {
            const res = await axios.post("/student/apply/internship/" + id);
            dispatch(asyncCurrentUser());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        }
        if (jobs.length === 0) GetJobs();
        if (internships.length === 0) GetInternships();
    }, [isAuthenticated]);

    const LogoutHandler = () => {
        router.push("/login");
        dispatch(asyncsignout());
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-blue-600">INTERSHALA</h1>
                    <div className="flex items-center space-x-4">
                        <h2 className="text-lg">Welcome {student && student.firstname}</h2>
                        <img className="w-12 h-12 rounded-full" src={student && student.avatar.url} alt="User Avatar" />
                        <button className="text-blue-500 hover:text-blue-700" onClick={LogoutHandler}>Logout</button>
                    </div>
                </div>
            </header>
            <div className="container mx-auto px-4 py-8">
                <nav className="mb-8">
                    <ul className="flex space-x-4">
                        <li className="text-lg hover:text-blue-600">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-lg hover:text-blue-600">
                            <Link href="/myapplication">My Applications</Link>
                        </li>
                        <li className="text-lg hover:text-blue-600">
                            <Link href="/editresume">Edit Resume</Link>
                        </li>
                        <li className="text-lg hover:text-blue-600 cursor-pointer" onClick={LogoutHandler}>Manage Account</li>
                    </ul>
                </nav>
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Jobs List</h2>
                    {jobs.map((j) => (
                        <div key={j._id} className="flex items-center justify-between border-b py-4 hover:bg-gray-200">
                            <p className="text-lg">{j.title}</p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none" onClick={() => ApplyJob(j._id)}>
                                Apply
                            </button>
                        </div>
                    ))}
                </section>
                <hr className="my-8" />
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Internships List</h2>
                    {internships.map((i) => (
                        <div key={i._id} className="flex items-center justify-between border-b py-4 hover:bg-gray-200">
                            <p className="text-lg">{i.profile}</p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none" onClick={() => ApplyInternship(i._id)}>
                                Apply
                            </button>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Home;
