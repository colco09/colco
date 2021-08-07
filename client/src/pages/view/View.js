import React from 'react';
import Navbar from '../components/navbar';
import Post from './pieces/post';
import Left from '../home/pieces/left';

const View = () => {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="single_view">
                <div className="single_left">
                    <Left />
                </div>
                <Post />
            </div>
        </div>
    )
}

export default View;
