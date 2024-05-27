import nodemailer from "nodemailer";
import { DoctorUser } from "../models/doctor.modal.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const docSignup = asyncHandler(async(req, res) => {
    const {
        fullName,
        email,
        password,
        mobNumber,
        exp,
        specialization,
        workingHrs,
    } = req.body;

    const newDoctor = new DoctorUser({
        fullName,
        email,
        password,
        mobNumber,
        exp,
        specialization,
        workingHrs,
    });

    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

    if (!emailRegex.test(newDoctor.email)) {
        return res.status(400).json({ message: "Invalid email" });
    }



    const user = await DoctorUser.findOne({ email });

    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }
    await newDoctor.save();

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "sarthakkumar2026@gmail.com",
            pass: "ewpluxrfellojpor",
        },
    });

    const doctorFirstSignup = {
        from: "sarthakkumar2026@gmail.com",
        to: newDoctor.email,
        subject: "Signup Successfully",
        text: `Hi ${newDoctor.fullName}, thanks for choosing up, And you login successfully.`,
    };

    await transporter.sendMail(doctorFirstSignup);

    res.status(201).json({
        message: "User created successfully",
    });
});

export const doctorSignIn = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    let user = await DoctorUser.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password" });
    }
    const id = user._id;
    const token = user.generateAccessToken();
    res.status(200).json({
        message: "User logged in successfully",
        token: token,
        id: id,
    });
});

export const getAllDoctors = asyncHandler(async(req, res) => {
    const fetAllDoctors = await DoctorUser.find({}, { password: 0 });
    res.status(200).json({
        message: "Doctors fetched successfully",
        fetAllDoctors,
    });
});

export const fetchDoctorById = asyncHandler(async(req, res) => {
    const { id } = req.params;
    const getDoctor = await DoctorUser.findById(id, { password: 0 });
    if (!getDoctor) {
        res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json({ message: "Doctor found", getDoctor });
});