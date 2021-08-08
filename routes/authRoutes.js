import express from 'express';

import { register, login, getUser } from '../actions/authActions.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/user/:id", getUser);

export default router;
