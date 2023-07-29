import { connect } from "@/db/dbconfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModels";
import { NextRequest,NextResponse } from "next/server";



connect();

export const GET = async(request:NextRequest) =>{

    try {
        const userId = await getDataFromToken(request);
        const user = User.findOne({_id:userId}).select("-password")
        console.log(user)
        return NextResponse.json({
            message:'user found',
            data:user
        })
    } catch (error:any) {
        throw new Error(error.message)
    }

}