import { connect } from "@/db/dbconfig";
import User from "@/models/userModels";
import { NextResponse,NextRequest } from "next/server";

connect();


export const POST = async(request:NextRequest) =>{
    try {
        const reqBody = await request.json();
        const {token} = reqBody;
        console.log(token);
        const user =   await User.findOne({verifyToken:token,verifyTokenExpiry:{gt: Date.now()}})

        if(!user){
            return NextResponse.json({error:'User not found'},{status:400})
        }

        console.log(user);

        user.isVerified = true;
        user.verifiedToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();

        return NextResponse.json({message:'Email verified',success:true})


    } catch (error:any) {
        return NextResponse.json(error.message);
    }
}