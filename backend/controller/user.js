import User from "../models/usermodel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import posting from "../models/posting.js";
import Relation from "../models/index.js";

try {
    Relation;
    console.log("Relation Mode On");
} catch (error) {
    console.log(error);
}
export const Regiser = async (req,res)=>{
    const { name,username,email,password } = req.body;
    
    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(password,salt);
    try {
        await User.create({
            name : name,
            username : username,
            email : email,
            password : hashPassword
        })
        res.json({msg : 'register berhasil'})
    } catch (error) {
        res.json({error})
        console.log(error)
    }
}

export const Login = async (req,res)=>{
    try {
        const users = await User.findAll({
            where : {
                email : req.body.email
            }
        });
        const matchPassword = await bcrypt.compare(req.body.password,users[0].password);
        if(!matchPassword){ return res.json({msg : 'email or password is wrong'})}
        const userid = users[0].id
        const username = users[0].name
        const email = users[0].email
        const accesstoken = jwt.sign({userid,username,email},"RAHASIA",{
            expiresIn : '120s'
        })
        const refresh_token = jwt.sign({userid,username,email},"RAHASIA",{
            expiresIn : '1d'
        })
        await User.update({refreshtoken : refresh_token},{
            where : {
                id : userid 
            }
        })
        res.cookie('refreshtoken ',refresh_token,{
            httpOnly : true,
            maxAge : 24 * 60 * 60 * 1000
        });
        res.json({accesstoken})
        console.log(req.headers['cookie'])
    } catch (error) {
        console.log(error);
    }
}


// export const GetProfile = async (req,res)=>{
//     try {
//         const Cookie = req.headers['cookie'];
//         const user = await User.findOne({
//             where : {
//                 id : 1
//             },attributes:["id","username"],
//             include:posting
//         });
//         res.json(user)
//     } catch (error) {
//         console.log(error)
//     }
// }

