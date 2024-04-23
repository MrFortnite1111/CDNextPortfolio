const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";
const connection = {
    host: process.env.NODEMAILER_HOST || "smtp.gmail.com",
    port: process.env.NODEMAILER_PORT || 465,
    secure: process.env.NODEMAILER_SECURE || true,
    auth: {
        user: process.env.NODEMAILER_USERNAME || "cosmicdesigns979@gmail.com",
        pass: process.env.NODEMAILER_PASSWORD || "dohbykftptnhevdy",
    },
}
const transporter = nodemailer.createTransport(connection);

console.log(connection)

type ResponseData = {
    status?: string;
    message?: string;
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("BODY", body);
        //send mail with defined transport object
        const info = await transporter.sendMail({
            replyTo: body.email, // sender address
            to: "cosmicdesigns979@gmail.com", // list of receivers
            subject: `My Vercel Contact: ${body.name}`, // Subject line
            text: body.message, // plain text body
            html: `<b>${body.message}</b>`, // html body
        });
        return NextResponse.json({
            status: "success",
            message: "Thanks for contacting me, I will get back to you when I can!"
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: "error",
            message: "Oops, something went wrong :("
        });
    }

}