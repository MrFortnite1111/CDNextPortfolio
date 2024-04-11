import { NextResponse } from "next/server";


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST || "smtp.google.com",
    port: process.env.NODEMAILER_PORT || 465,
    secure: process.env.NODEMAILER_SECURE || true,
    auth: {
        user: process.env.NODEMAILER_USERNAME || "cosmicdesigns979@gmail.com",
        pass: process.env.NODEMAILER_PASSWORD || "pqbb dqul zfut cola",
    },
});

type ResponseData = {
    status?: string;
    message?: string;
};

export async function POST(request: Request) {
    const response: ResponseData = {};
    const body = await request.json();
    console.log("MY BODY", body);
    const info = await transporter.sendMail({
        from: body.email, // sender address
        to: "cosmicdesigns979@gmail.com", // list of receivers
        subject: `HMy Vercel Contact: $ {body.name}`, // Subject line
        text: body.message, // plain text body
        html: `<b>$(body.message)</b>`, // html body
    });
    return NextResponse.json(response);
}