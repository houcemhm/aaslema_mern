import Post from "../models/Post.js";
import User from "../models/User.js";




export const createPost =async (req,res)=>{
    try {
        const {userId,description,picturePath}=req.body;
        const user=await User.find
    } catch (err) {
        res.status(409).json({
            message:err.message
        })
    }
}