import jwt from "jsonwebtoken";

const verifytoken = (req, res, next) => {
  const authheader = req.headers["authorization"];
  const token = authheader && authheader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, "RAHASIA", (error, decode) => {
    if (error) return res.sendStatus(403).json(error);
    req.email = decode.email;
    next();
  });
};

export default verifytoken;
