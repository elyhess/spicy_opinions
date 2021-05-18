import { Router } from "express";
const comment = require("../controllers/comment.controller")
const router = Router();

router.post("/", comment.createComment)

export default router;