import express from 'express';

import { register, login } from '../actions/authActions.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
