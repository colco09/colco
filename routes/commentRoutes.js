import express from 'express';

const router = express.Router();

import { addComment, getComments, editComment, deleteComment } from '../actions/commentActions.js';

router.post("/add", addComment);
router.get("/:id", getComments);
router.put("/edit/:id", editComment);
router.delete("/:id", deleteComment);

export default router;