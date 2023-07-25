import mongoose from "mongoose";

export const connect = async() =>{
    try {
        mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('MongoDB connected successfully');
        })

        connection.on('error',()=>{
            console.log('Something went wrong cannot connected')
        })

    } catch (error:any) {
        console.log('Error! something went wrong');
        console.log(error.message)
    }
}