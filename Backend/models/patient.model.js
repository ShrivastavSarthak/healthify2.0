import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import json from "jsonwebtoken";
const patientSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobNumber: {
    type: Number,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  patientBio: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

patientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

patientSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

patientSchema.methods.generateAccessToken = function () {
  return json.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    "ImTheSecret",
    {
      expiresIn: "1d",
    }
  );
};

export const PatientUser = mongoose.model("PatientUser", patientSchema);
