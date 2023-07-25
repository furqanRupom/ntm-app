import { connect } from "@/db/dbconfig";
import User from '@/models/userModels'
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from "bcryptjs"

connect();

export const POST = async(request:NextResponse)=>{
    try {
        const reqBody =  await request.json()
        const {username,email,password} = reqBody;
        console.log(reqBody);

        // check user is exit or not

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error:'User already exists'},{status:400})
        }

        // hash password
        // created a strong password for secure

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({message:'user created successfully',status:200})


    } catch (error) {
        return NextResponse.json({error:'some thing went wrong',status:403})
    }
}