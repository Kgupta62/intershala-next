import { asyncCurrentUser, asyncsignin } from "@/store/Actions/StudentActions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthenticated } = useSelector((state) => state.StudentReducer);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = {
            email,
            password,
        };
        dispatch(asyncsignin(student));
    };

    useEffect(() => {
        if (!isAuthenticated) dispatch(asyncCurrentUser());
        if (isAuthenticated) router.push("/auth/home");
    }, [isAuthenticated]);

    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-600">INTERSHALA</h1>
            <h1 className="text-3xl font-bold mb-8">Login Please!</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 mt-1 leading-tight border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 mt-1 leading-tight border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Student Signin
                </button>
            </form>
            <div className="mt-4">
                <Link href="/forget" className="text-blue-500 hover:underline">Forget Password?</Link>
            </div>
            <div className="mt-2">
                <Link href="/auth/home" className="text-blue-500 hover:underline">Homepage</Link>
            </div>
        </div>
    );
};

export default Login;
