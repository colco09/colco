import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import Options from './options';

const Register = ({ history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("")
            }, 3000);
            return setError("Passwords do not match");
        }

        const emailDomain = email.split("@")[1];

        if (emailDomain === "saitm.org") {
            try {
                const { data } = await axios.post("/auth/register", { name, email, password }, config);

                localStorage.setItem("authToken", data.token);

                history.push("/login");
            } catch (error) {
                setError(error.message);
                setTimeout(() => {
                    setError("");
                }, 3000);
            }
        } else {
            setError("Please use your official email");
        }
    }



    return (
        <div className="login_container">
            <div className="login_form">
                <div className="login_form_inside">
                    <h1 className="signup_head"><span className="grey_head">Let's</span> go</h1>
                    {error ? <p className="signup_message cred_error_message">{error}</p> : <p className="signup_message">Welcome, you'll love the journey.</p>}
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form_inputs">
                            <label htmlFor="Name">Name:</label>
                            <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} autoFocus />
                        </div>
                        <div className="form_inputs">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form_inputs">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form_inputs">
                            <label htmlFor="confirm_password">Confirm password:</label>
                            <input type="password" name="confirm_password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="form_submits">
                            <button type="submit" name="signup">Register</button>
                            <Link to="/login" >Login</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Options />
        </div>
    );
}

export default Register;