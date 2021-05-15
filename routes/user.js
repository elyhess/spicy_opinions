import { Router } from "express";
const user = require("../controllers/user.controller")
const router = Router();
import passport from "passport";
import "../auth/passport";

router.get("/", passport.authenticate("jwt", { session: false }), user.getUsers)
router.get("/:id", passport.authenticate("jwt", { session: false }), user.getUser)
router.post("/register", user.registerUser)
router.post("/login", user.loginUser)


export default router;