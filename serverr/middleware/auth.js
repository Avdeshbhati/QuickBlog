// import jwt from "jsonwebtoken"
//  const auth=(req,res,next)=>{
//     const token =req.headers.authorization
//     try{
//      jwt.verify(token,process.env.JWT_SECRET)
//      next()
//     }
//     catch(error){
//          res.json({success:false,message:"Invalid Token"})
//     }
//  }
//  export default auth

import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }
    // Support Bearer tokens
    if (token.startsWith("Bearer ")) {
        token = token.slice(7);
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Optional: attach user info
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Invalid Token" });
    }
};

export default auth;