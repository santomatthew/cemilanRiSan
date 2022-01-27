import posting from "../models/posting.js";
import User from "../models/usermodel.js";
import cloudinary from "../utils/cloudinary.js";
// import cookieParser from "cookie-parser";

export const getallPost = async (req, res) => {
  try {
    const getall = await posting.findAll();
    res.status(200).json(getall);
  } catch (error) {
    res.status(404).json({ msg: error });
    console.log(error);
  }
};

export const getNamePoster = async (req, res) => {
  try {
    const getbyId = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(getbyId[0]);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
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

export const newPost = async (req, res) => {
  const cookies = parseCookies(req);

  const user = await User.findOne({
    where: {
      refresh_token: cookies.refresh_token,
    },
  });
  const { title, bahan, caption } = req.body;
  try {
    const urlPhoto = await cloudinary.v2.uploader.upload(req.file.path);
    await posting.create({
      title: title,
      bahan: bahan,
      caption: caption,
      img_url: urlPhoto.secure_url,
      user_id: user.id,
    });
    res.status(200).json({ msg: "berhasil post" });
  } catch (error) {
    res.status(200).json({ msg: "gagal post" });
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    await posting.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      msg: "data deleted",
    });
  } catch (error) {
    res.json({
      msg: error,
    });
  }
};

export const getdetailPost = async (req, res) => {
  const cookies = parseCookies(req);
  const user = await User.findOne({
    where: {
      refresh_token: cookies.refresh_token,
    },
  });
  if (user == null) {
    res.status(404).json({ msg: "not allowed" });
  }
  try {
    const getbyId = await posting.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(getbyId[0]);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
