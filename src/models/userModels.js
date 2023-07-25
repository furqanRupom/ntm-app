import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,'please provide your name'],
    },
    email:{
        type:String,
        required:[true, 'please provide your email']
    },
    password:{
        type:String,
        required:[true,'please provide your password']
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

    forgetPasswordToken:String,
    forgetPasswordExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})


// mongoose.models.users for if collection already exit

const User = mongoose.models.users || mongoose.model('user',userSchema)

export default User;