import express from "express";
import upload from '../utils/multer.js';
import { getallPost, newPost, deletePost, getdetailPost } from "../controller/post.js";
import { Login, Regiser } from "../controller/user.js";
import verifytoken from "../middleware/verifytoken.js";
import refreshtToken from "../controller/refreshtoken.js";

const router = express.Router()


router.get('/get',verifytoken,getallPost)
router.get('/get/:id',verifytoken,getdetailPost)
router.post('/post',verifytoken,upload.single("img_url"),newPost)
router.delete('/delete/:id', deletePost)

// routers For Users;
router.post('/api/signup',Regiser)
router.post('/api/login',Login)

//routers for Token
router.get('/api/token',refreshtToken)
export default router;