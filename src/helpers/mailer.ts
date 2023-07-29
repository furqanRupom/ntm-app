import User from "@/models/userModels";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";



export const sendEmail = async({email,emailType,userId}:any)=>{
    try {
        // create a hashed token

        const hashedToken = await bcryptjs.hash(userId.toString(),10)

        if(emailType === 'VERIFY'){
            await User.findByIdAndUpdate(userId,{verifyToken:hashedToken,verifyTokenExpiry:Date.now() + 36000000})
        }
        else if(emailType === 'RESET'){
            await User.findByIdAndUpdate(userId,{forgetPasswordToken:hashedToken,forgetPasswordExpiry:Date.now() + 36000000})
        }

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.SECRET_USER,
              pass: process.env.SECRET_PASS
            }
          });

          const mailOptions = {
            from:'furqnrupom978@gmail.com',
            to:email,
            subject: emailType === 'VERIFY'? 'Verify your email' : 'Reset your password',
            html:`<p>Click <a href="${process.env.domain}/verifyEmail?token=${hashedToken}">here</a> to ${emailType === 'VERIFY'? 'Verify your email' : 'Reset your password'}</p>`
          }

          const mailResponse = await transport.sendMail(mailOptions);
          return mailResponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}