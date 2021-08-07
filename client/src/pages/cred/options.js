import React from 'react';
import { Link } from 'react-router-dom';

import pattern from '../images/pattern17.jpg';

const Options = () => {
    return (
        <div className="login_image" style={{ backgroundImage: `url(${pattern})` }}>
            <nav>
                <Link to="" >About</Link>
                <Link to="" >Contact</Link>
                <Link to="" >Developers</Link>
                <Link to="" >Carrers</Link>
            </nav>
            <footer>
                <p>&copy; 2021</p>
                <div className="social-links">
                    <Link to="" ><i className="fab fa-twitter-square"></i></Link>
                    <Link to="" ><i className="fab fa-facebook-square"></i></Link>
                    <Link to="" ><i className="fab fa-instagram-square"></i></Link>
                    <Link to="" ><i className="fab fa-github-square"></i></Link>
                </div>
            </footer>
        </div >
    );
}

export default Options;