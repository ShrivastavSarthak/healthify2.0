import { PatientUser } from "../models/patient.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const patientSignup = asyncHandler(async (req, res) => {
  const { fullName, email, password, mobNumber } = req.body;

  const newUser = new PatientUser({
    fullName,
    email,
    password,
    mobNumber,
  });

  let user = await PatientUser.findOne({ email: email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  await newUser.save();
  console.log("user saved");

  res.status(201).json({
    message: "User created successfully",
  });
});

export const patientSignIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let user = await PatientUser.findOne({ email });
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
