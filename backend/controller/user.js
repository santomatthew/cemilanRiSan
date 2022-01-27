import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import posting from "../models/posting.js";
import Relation from "../models/index.js";

try {
  Relation;
  console.log("Relation Mode On");
} catch (error) {
  console.log(error);
}

export const Register = async (req, res) => {
  const { name, username, email, password } = req.body;

  const salt = await bcrypt.genSalt();

  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await User.create({
      name: name,
      username: username,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    res.json({ error });
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        email: req.body.email,
      },
    });
    const matchPassword = await bcrypt.compare(
      req.body.password,
      users[0].password
    );
    if (!matchPassword) {
      return res.status(400).json({ msg: "Email or Password is invalid" });
    }
    const userid = users[0].id;
    const username = users[0].name;
    const email = users[0].email;
    const accessToken = jwt.sign({ userid, username, email }, "RAHASIA", {
      expiresIn: "120s",
    });
    const refreshToken = jwt.sign({ userid, username, email }, "RAHASIA", {
      expiresIn: "1d",
    });
    await User.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userid,
        },
      }
    );
    console.log(refreshToken);
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
    console.log(req.headers["cookie"]);
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refresh_token;
  if (!refreshToken) return res.sendStatus(204);
  const user = await User.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await User.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refresh_token");
  return res.sendStatus(200);
};

function parseCookies(request) {
  const list = {};
  const cookieHeader = request.headers?.cookie;
  if (!cookieHeader) return list;

  cookieHeader.split(`;`).forEach(function (cookie) {
    let [name, ...rest] = cookie.split(`=`);
    name = name?.trim();
    if (!name) return;
    const value = rest.join(`=`).trim();
    if (!value) return;
    list[name] = decodeURIComponent(value);
  });

  return list;
}

export const GetProfile = async (req, res) => {
  try {
    const cookie = parseCookies(req);
    // console.log(cookie);
    const user = await User.findOne({
      where: {
        refresh_token: cookie.refresh_token,
      },
      attributes: ["id", "username"],
      include: posting,
    });
    res.json(user);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
