import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const editresume = () => {
    const { isAuthenticated, student } = useSelector(
        (state) => state.StudentReducer
    );
    const { resume } = student;
    return (
        <div>
            <h1>Edit Resume</h1>
            <h3>Education</h3>
            {resume.education.map((e, i) => {
                return (
                    <div key={i}>
                        <p>
                            {e.school} - {e.board} - {e.year}
                        </p>
                        <p>
                            {e.performance} - {e.status} |{" "}
                            <Link href="">Delete Education</Link>
                        </p>
                    </div>
                );
            })}
            <Link href="/addeducation">Add Education</Link>
        </div>
    );
};

export default editresume;
