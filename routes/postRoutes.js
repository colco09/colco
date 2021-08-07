import express from 'express';

const router = express.Router();

import { createPost, deletePost, updatePost, getAllPosts, getPost, increaseLike } from '../actions/postActions.js';

router.post("/new", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/like", increaseLike);

export default router;