import express from "express";
import upload from '../utils/multer.js';
import { getallPost, newPost, deletePost, getdetailPost } from "../controller/post.js";
import { Login, Regiser } from "../controller/user.js";
import verifitoken from "../middleware/verifytoken.js"

const router = express.Router()


router.get('/get',getallPost)
router.get('/get/:id',getdetailPost)
router.post('/post',upload.single("img_url"),newPost)
router.delete('/delete/:id', deletePost)


// routers For Users;
router.post('/api/signup',Regiser)
router.post('/api/login',Login)
export default router;