import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Options from './options';

const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push("/home");
        }
    }, [history]);

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                "/auth/login",
                { email, password },
                config
            );

            localStorage.setItem("authToken", data.token);

            history.push("/home");
        } catch (error) {
            setError(error.message);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="login_container">
            <div className="login_form">
                <div className="login_form_inside">
                    <h1 className="login_head"><span className="grey_head">Let's</span> connect</h1>
                    {error ? <p className="signup_message cred_error_message">{error}</p> : <p className="signup_message">Welcome back, please login back to your account.</p>}
                    <form action="" onSubmit={loginHandler}>
                        <div className="form_inputs">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" required onChange={(e) => setEmail(e.target.value)} autoFocus />
                        </div>
                        <div className="form_inputs">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="rm_fp">
                            <div className="rm">
                                <input type="checkbox" name="rememberme" id="" value="Remember me" /><span> Remember me</span>
                            </div>
                            <Link to="" >Forgot Password?</Link>
                        </div>
                        <div className="form_submits">
                            <button type="submit" name="login">Login</button>
                            <Link to="/register" >Register</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Options />
        </div>
    );
}

export default Login;