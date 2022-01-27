import express from "express";
import db from "./config/db.js";
import router from "./routers/router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import User from "../backend/models/usermodel.js";
import posting from "../backend/models/posting.js";

dotenv.config();

try {
  await db.authenticate();
  await User.sync();
  await posting.sync();
  console.log("Database connected......");
} catch (error) {
  console.log(error);
}

const app = express();
const Port = 6999;

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(router);
app.listen(Port, () => {
  console.log("connectedd....");
});
