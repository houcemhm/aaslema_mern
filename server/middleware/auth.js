import jwt from 'jsonwebtoken';

export const verifyToken=async(req,res,next)=>{
    try {
        let token=req.header("Authorization");
        if (!token) {
            return res.states(403).send("Access Denied");        
        }
        if (token.startsWith("Bearer ")) {
            token=token.slice(7,token.length).trimLet();
        }
        const verified=jwt.verify(token,process.env.JWT_SECRET);
        req.user=verified;
        next();
    } catch (err) {
        
    }
};