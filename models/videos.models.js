import mongoose,{Schema} from "mongoose";

const videoSchema=new Schema({
      videoFile:{
        type:String, // will upload video on cloudnary and will give URL over here
        required:true,
      },
      thumbnail:{
        type:String, // i will url of cloudinary after uploading image
        required:true,
      },
      owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
      },
      title:{
        type:String,
        required:true,
      },
      description:{
        type:String,
        required:true,
      },
      duration:{
        type:Number,// comes from cloudnary
        required:true,
        default:0
      },
      views:{
        type:Number,
        required:true,
        default:0
      },
      isPublished:{
        type:Boolean,
        default:true
      }
},{timestamps:true});

export const Video=mongoose.model("Video",videoSchema);