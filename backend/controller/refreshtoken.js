import User from "../models/usermodel.js";
import jwt from "jsonwebtoken"

const refreshtToken= async (req,res)=>{
    try {
        const refresh_token = req.cookies.refreshtoken;
        if(!refresh_token) return res.status(404);
        const user = await User.findAll({
            where : {
                refreshtoken : refresh_token
            }
        });
        if(!user[0]) return res.status(404);
        jwt.verify(refresh_token,'RAHASIA',(error,decode)=>{
            if(error) return res.status(404);
            const userid = user[0].id;
            const name = user[0].name;
            const username = user[0].username;
            const email = user[0].email
            const accsessToken = jwt.sign({userid,name,username,email},'RAHASIA',{
                expiresIn : '30s'
            });
            res.json(accsessToken)
        })
    } catch (error) {
        res.json({msg : "error"});
        console.log(error);
    }
}

export default refreshtToken;