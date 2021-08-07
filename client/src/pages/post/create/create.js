import React, { useState } from 'react';
import axios from 'axios';

import Navbar from '../../components/navbar';

const Create = () => {
    const [title, setTitle] = useState("");
    const [excrept, setExcrept] = useState("");
    const [file, setFile] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !excrept || !file) {
            setError("Please fill all fields");
        }

        if (!error) {
            const newPost = {
                title,
                excrept
            };
            if (file) {
                const data = new FormData();
                const filename = Date.now() + file.name;
                data.append("name", filename);
                data.append("file", file);
                newPost.image = filename; // Added the image name
                try {
                    await axios.post("/upload", data);
                } catch (error) {
                    console.log(error.message);
                }
            }

            try {
                await axios.post("/post/new", newPost);
                window.location.replace("/home");
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    setTimeout(() => {
        setError("");
    }, 5000);

    return (
        <>
            <Navbar />
            <div className="create">
                <div className="create-form">
                    <h2>Create a post</h2>
                    {error && <span className="error_message">{error}</span>}
                    <form onSubmit={handleSubmit}>
                        {file &&
                            <div className="form_images">
                                <img src={URL.createObjectURL(file)} alt="Upload" />
                            </div>
                        }
                        <div className="button-wrap">
                            <label className="button" htmlFor="upload">Upload File</label>
                            <input id="upload" type="file" onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <input type="text" id="title" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                        <textarea placeholder="Text" name="body" id="" cols="30" rows="10" onChange={(e) => setExcrept(e.target.value)} />
                        <button type="submit">Create</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Create;
