import { Router } from "express";
const article = require("../controllers/article.controller")
const router = Router();
import passport from "passport";
import "../auth/passport";

router.get("/", passport.authenticate("jwt", { session: false }),article.getArticles)
router.get("/:id", article.getArticle)
router.post("/new", article.createArticle)
router.patch("/:id", article.updateArticle)
router.delete("/:id", article.deleteArticle)

export default router;