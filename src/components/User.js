import { useEffect, useState } from "react";

const User = ({ name }) => {
    useEffect(() => {
        // API Call

    },[]);
    
    return (
        <div className="user-card">
            <h2>Name: name</h2>
            <h3>Location: Bangalore</h3>
            <h4>contact: @bharath2552</h4>
        </div>
    );
};

export default User;