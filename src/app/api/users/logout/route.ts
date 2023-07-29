import { NextResponse } from "next/server"

export const GET = ()=>{
    try {
        const response = NextResponse.json({
            message:'Log out successfully',
            status:200
        })

        response.cookies.set("token","",{
            httpOnly:true,
        });

        return response;

    } catch (error:any) {
       return  NextResponse.json({error:error.message},{status:403});
    }
}