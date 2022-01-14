import express from "express";
import { getallPost, newPost, deletePost } from "../controller/post.js";

const router = express.Router()


router.get('/get',getallPost)
router.post('/post',newPost)
router.delete('/delete/:id', deletePost)


export default router;