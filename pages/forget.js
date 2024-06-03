import React from "react";

const forget = () => {
    const EmailHandler = () => {
        console.log("email");
    };
    return (
        <div>
            {/* forget form  */}
            <button onClick={EmailHandler}>Send Mail</button>
        </div>
    );
};

export default forget;
