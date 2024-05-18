import { DoctorUser } from "../models/doctor.modal.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const docSignup = asyncHandler(async (req, res) => {
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

  const user = await DoctorUser.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  await newDoctor.save();

  res.status(201).json({
    message: "User created successfully",
  });
});

export const doctorSignIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let user = await DoctorUser.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Incorrect password" });
  }
  const token = user.generateAccessToken();
  res.status(200).json({
    message: "User logged in successfully",
    token: token,
  });
});
