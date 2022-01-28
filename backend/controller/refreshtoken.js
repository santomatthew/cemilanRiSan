import User from "../models/usermodel.js";
import jwt from "jsonwebtoken";

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) return res.status(401);
    const user = await User.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user[0]) return res.status(403);
    jwt.verify(refreshToken, "RAHASIA", (error, decode) => {
      if (error) return res.status(403);
      const userid = user[0].id;
      const name = user[0].name;
      const username = user[0].username;
      const email = user[0].email;
      const accessToken = jwt.sign(
        { userid, name, username, email },
        "RAHASIA",
        {
          expiresIn: "1d",
        }
      );
      res.json({ accessToken });
    });
  } catch (error) {
    res.json({ msg: "error" });
    console.log(error);
  }
};

export default refreshToken;
