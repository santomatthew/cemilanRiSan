import posting from "../models/posting.js";
import cloudinary from '../utils/cloudinary.js';

export const getallPost = async(req,res)=>{
    try {
        const getall = await posting.findAll()
        res.status(200).json(getall)
    } catch (error) {
        res.status(404).json({msg : 'data null'})
    }
}

export const newPost = async(req,res)=>{
    try {
        const urlPhoto = await cloudinary.v2.uploader.upload(req.file.path)
        const {title,bahan,caption}= req.body;
        await posting.create({
            title : title,
            bahan : bahan,
            caption : caption,
            img_url : urlPhoto.secure_url
        });
        res.status(200).json({msg : 'berhasil post'})
    } catch (error) {
        res.json({msg : 'gagal post'})
        console.log(error)
    }
}

export const deletePost= async (req,res)=>{
    try {
        await posting.destroy({
            where : {
                id: req.params.id
            }
        })
        res.json({
            msg:"data deleted"
        })
    } catch (error) {
        res.json({
            msg: error
        })
    }
}