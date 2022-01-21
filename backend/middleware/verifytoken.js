import jwt  from "jsonwebtoken";

const verifytoken = (req,res,next)=>{
    const authheader = req.headers['authorization'];
    const token = authheader && authheader.split(" ")[1]
    if(token == null) return res.status(402)
    jwt.verify(token,'RAHASIA',(error,decode)=>{
        if(error) return res.json(error);
        req.email = decode.email;
        next()
    })
}

export default verifytoken;