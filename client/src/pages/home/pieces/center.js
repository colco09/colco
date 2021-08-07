import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../../../context/context';

const Center = () => {
    const { likeCount, like } = useGlobalContext();
    const [posts, setPosts] = useState([]);

    const IL = "http://localhost:5000/images/";

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/post");
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

    return (
        <div className="center-content-box">
            <div className="create-post-go-to-page">
                <div className="go-to-form-box">
                    <form action="">
                        <Link to="/create"><input type="text" className="go-to-input" placeholder="Create Post" /></Link>
                    </form>
                </div>
            </div>

            <div className="options">
                <ul>
                    <li><Link to="" >Top</Link></li>
                    <li><Link to="" >New</Link></li>
                    <li><Link to="" >Tech</Link></li>
                    <li><Link to="" >Notices</Link></li>
                    <li><Link to="" >Events</Link></li>
                </ul>
            </div>

            <div className="posts">
                {posts.map((post) => {
                    const { _id, title, excrept, image } = post;
                    return (
                        <div className="post">
                            <div className="post-img">
                                <img src={IL + image} alt="" />
                            </div>
                            <div className="post-text">
                                <Link to={`/post/view/${_id}`} ><h3 className="post-title">{title}</h3></Link>
                                <p>{excrept}</p>
                            </div>
                            <div className="post-info">
                                <div className="post-btns">
                                    <button className="like-btn" onClick={likeCount}><i className="far fa-heart"></i><span className="like-count">{like}</span></button>
                                    <button className="comment-btn"><i className="far fa-comment-alt"></i></button>
                                </div>
                                <div className="post-auth">
                                    <small className="post-author">Raj</small>
                                    <small className="post-date">12-04-21</small>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div >
        </div >
    )
}

export default Center;
