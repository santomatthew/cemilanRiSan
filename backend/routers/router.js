import express from "express";
import upload from "../utils/multer.js";
import {
  getallPost,
  newPost,
  deletePost,
  getUserPost,
  getdetailPost,
  EditPost,
  GetProductById,
  getNamePoster,
} from "../controller/post.js";
import { Login, Register, GetProfile, Logout } from "../controller/user.js";
import verifytoken from "../middleware/verifytoken.js";
import refreshToken from "../controller/refreshtoken.js";

const router = express.Router();

//router for Post
router.get("/get", verifytoken, getallPost, getNamePoster);
router.get("/get/listpost/:id", verifytoken, getUserPost);
router.get("/get/:id", verifytoken, getdetailPost);
router.get("/get/recipe/:id", verifytoken, GetProductById);
router.post("/post", verifytoken, upload.single("img_url"), newPost);
router.delete("/delete/:id", deletePost);
router.patch(
  "/profile/edit/:id",
  verifytoken,
  upload.single("img_url"),
  EditPost
);

// routers For Users;
router.post("/api/signup", Register);
router.post("/api/login", Login);
router.delete("/logout", Logout);

//routers for Token
router.get("/api/token", refreshToken);
router.get("/get/profile/:id", verifytoken, GetProfile);
export default router;
