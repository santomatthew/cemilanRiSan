import express from "express";
import { getallPost, newPost, deletePost, getdetailPost } from "../controller/post.js";
import upload from "../utility/multer.js";

const router = express.Router()


router.get('/get',getallPost)
router.get('/get/:id',getdetailPost)
router.post('/post',upload.single("img_url"),newPost)
router.delete('/delete/:id', deletePost)


export default router;