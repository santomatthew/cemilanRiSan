import posting from "../models/posting.js";

export const getallPost = async(req,res)=>{
    try {
        const getall = await posting.findAll()
        res.status(200).json(getall)
    } catch (error) {
        res.status(404).json({msg : error})
    }
}

export const newPost = async(req,res)=>{
    const {title,bahan,caption,img_url}= req.body
    try {
        await posting.create({
            title : title,
            bahan : bahan,
            caption : caption,
            img_url : img_url
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