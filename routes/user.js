import express from "express";
import { handleSignUp,handleLogin } from "../Controllers/user.js";

const router = express.Router();

router.post("/", handleSignUp);
router.post("/login", handleLogin);

export default router;