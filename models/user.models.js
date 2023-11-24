import mongoose,{Schema} from "mongoose";

const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, // i will url of cloudinary after uploading image
        required:true,
    },
    coverImage:{
        type:String, // i will url of cloudinary after uploading image
        required:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ]

},{timestamps:true});

export const User=mongoose.model("User",userSchema);