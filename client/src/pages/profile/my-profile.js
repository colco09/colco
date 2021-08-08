import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import profile from '../images/avatar.jpg';
import Navbar from '../components/navbar';

const Profile = () => {
    const [user, setUser] = useState("");

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("/auth/user/" + id);
            setUser(res.data);
        }
        fetchUser();
    }, [id]);


    return (
        <>
            <Navbar />
            <div className="profile">
                <div className="profile-img">
                    <img src={profile} alt="Profile" />
                </div>
                <div className="profile-info">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Mobile:</strong> +911234567890</p>
                    <p><strong>College:</strong> SAITM</p>
                    <p><strong>Sec:</strong> B</p>
                    <p><strong>Wing:</strong> A</p>
                    <p><strong>Status:</strong> Single</p>
                    <p><strong>Type:</strong> Full-stack developer</p>
                    <p><strong>Available:</strong> Yes</p>
                    <div className="ask">
                        <button className="ask-email">Ask for email</button>
                        <button className="ask-mobile">Ask for number</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
