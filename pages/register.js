import React, { useEffect, useState } from "react";
import { asyncCurrentUser, asyncsignup } from "../store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [contact, setcontact] = useState("");
    const [city, setcity] = useState("");
    const [gender,setgender] = useState("");
    const [email,setemail] = useState("");
    const [password, setpassword] = useState("");
    const { isAuthenticated } = useSelector((state) => state.StudentReducer);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const student = {
            firstname,
            lastname,
            contact,
            city,
            gender,
            email,
            password,
        };
        dispatch(asyncsignup(student));
    };

    useEffect(() => {
        if (!isAuthenticated) dispatch(asyncCurrentUser());
        if (isAuthenticated) router.push("/auth/home");
    }, [isAuthenticated]);

    return (
        <div>
               <h1 className="text-3xl font-bold text-blue-600">INTERSHALA</h1>
            <h1>Register</h1>
<div className="mb-4">
                    <input
                        type="text"
                        name="firstname"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                        placeholder="First Name"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                        placeholder="Last Name"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="contact"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                        placeholder="Contact Number"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                        placeholder="City"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="gender"
                        value={gender}
                        onChange={(e) => setgender(e.target.value)}
                        placeholder="Gender"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
            <button onClick={SubmitHandler}>Register Student</button>
        </div>
    );
};

export default Register;
          


