import nodemailer from "nodemailer";

export const Transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "sarthakkumar2026@gmail.com",
        pass: "ewpluxrfellojpor",
    },
});