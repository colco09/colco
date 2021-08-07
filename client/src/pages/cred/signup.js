import React from 'react';
import Options from './options';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const Signup = () => {
    const handleSubmit = () => {

    }

    const handleChange = () => {

    }


    return (
        <div className="login_container">
            <div className="login_form">
                <div className="login_form_inside">
                    <h1 className="signup_head"><span className="grey_head">Let's</span> go</h1>
                    <p className="signup_message">Welcome, you'll love the journey.</p>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form_inputs">
                            <label for="Name">Name:</label>
                            <input type="text" name="name" handleChange={handleChange} autoFocus />
                        </div>
                        <div className="form_inputs">
                            <label for="email">Email:</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="form_inputs">
                            <label for="password">Password:</label>
                            <input type="password" name="password" />
                        </div>
                        <div className="form_inputs">
                            <label for="confirm_password">Confirm password:</label>
                            <input type="password" name="confirm_password" />
                        </div>
                        <div className="form_submits">
                            <button type="submit" name="signup">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
            <Options />
        </div>
    );
}

export default Signup;