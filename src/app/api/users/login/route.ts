import { connect } from "@/db/dbconfig";
import User from '@/models/userModels'
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


connect();

export const POST = async(request:NextResponse) =>{
    try {
        const reqBody = await request.json();
        const {email,password} = reqBody;
        console.log(email,password);

        // if user exit or not

        const user = await User.findOne({email});

        if(!user){
           return NextResponse.json({error:'user does not exit'},{status:404})
        }

        // check password is correct
        const validPassword = await bcryptjs.compare(password,user.password);

        if(!validPassword){
            return NextResponse.json({error:'Invalid password'},{status:400});
        }


        // create token data

        const tokenData = {
            id:user._id,
            username:user.username,
            email:user.email
        }

        // create token
        const token =  jwt.sign(tokenData,process.env.SECRET_TOKEN!,{
            expiresIn:'1d'
        });
        const response = NextResponse.json({
            message:'Login user successfully',
            success:true
        })


        // set the token in the cookies

        response.cookies.set('token',token,{
            httpOnly:true,
        })



        return response;


    } catch (error) {
        return NextResponse.json({error:'something went wrong',status:403})
    }
}