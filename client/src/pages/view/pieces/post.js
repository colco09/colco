import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import decode from "jwt-decode";


import '../../../index.css';
import gif from '../../images/loading.gif';
import avatar from '../../images/avatar.png';

const Post = () => {
    const [user, setUser] = useState("");
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    const [loading, setLoading] = useState(false);

    // Comment User
    const token = localStorage.getItem("authToken");
    const decoded = decode(token);
    // Add
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");

    const location = useLocation();
    const id = location.pathname.split("/")[3];

    const IL = "http://localhost:5000/images/";
    
     useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/auth/user/" + decoded.id);
      setUser(res.data);
    };
    fetchUser();
  }, [decoded.id]);


    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/post/" + id);
            setPost(res.data);
        }
        fetchPost();
    }, [id]);

    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get("/comment/" + id);
            setComments(res.data);
        }
        fetchComments();
    }, [id]);

    if (loading) {
        return (
            <img src={gif} alt="Loading gif" style={{ height: "100px", width: "100px", margin: "0 auto" }} />
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            comment,
            post_id: id,
//             name,
        };

        try {
            setLoading(true);
            await axios.post("/comment/add", newComment);
            window.location.replace("/post/view/" + post._id);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="single_post">
            <div className="single_post_post">
                <div className="single_post_content">
                    <div className="single_post_img">
                        <img src={IL + post.image} alt="Post" />
                    </div>
                    <div className="single_post_text">
                        <h1 className="single_post_title">{post.title}</h1>
                        <p className="single_post_excrept">{post.excrept}</p>
                        <div className="post_like_btn">
                            <button className="like_btn"><i class="fas fa-arrow-up"></i> {post.likeCount}</button>
                            <button className="dislike_btn"><i class="fas fa-arrow-down"></i></button>
                        </div>
                    </div>
                </div>

                <div className="single_post_comments">
                    <div className="single_post_form">
                        <h2>Comments</h2>
                        <form onSubmit={handleSubmit}>
                            {/* <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <br /> */}
                            <input type="text" name="comment" onChange={(e) => setComment(e.target.value)} />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                    <div className="single_post_comment" >
                        {comments.map((comment) => {
                            return (
                                <>
                                    <div key={comment._id}>
                                        <div className="comment_avatar">
                                            <img src={avatar} alt="avatar" style={{ height: "35px", width: "35px" }} />
                                            <small>{user.name}</small>
                                        </div>
                                        <p>{comment.comment}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="single_post_community">

            </div>
        </div>
    );
}

export default Post;
