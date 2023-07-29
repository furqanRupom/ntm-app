// middleware for secure user login or not..
import { NextResponse,NextRequest } from "next/server";




export const middleware = (request:NextRequest)=>{

    const path = request.nextUrl.pathname;
    const isPublic = path === '/login' || path === '/signup';
    const token = request.cookies.get('token')?.value || "";

    if(isPublic && token){
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }

    if(!isPublic && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }

}


export const config = {
    matcher:[
        '/',
        '/profile',
        '/login',
        '/signup'
    ]
}