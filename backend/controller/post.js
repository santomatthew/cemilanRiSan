import posting from "../models/posting.js";
import User from "../models/usermodel.js";
import cloudinary from "../utils/cloudinary.js";

export const getallPost = async (req, res) => {
  try {
    const getall = await posting.findAll();
    res.status(200).json(getall);
  } catch (error) {
    res.status(404).json({ msg: error });
    console.log(error);
  }
};

export const newPost = async (req, res) => {
  const cookies = req.headers["cookie"];
  const user = await User.findOne({
    where: {
      refresh_token: cookies,
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
  const cookies = req.headers["cookie"];
  const user = await User.findOne({
    where: {
      refresh_token: cookies,
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
