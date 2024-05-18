import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import json from "jsonwebtoken";
const doctorSchema = new Schema({
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
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },
  specialization: {
    type: String,
  },
  workingHrs: {
    type: Number,
    required: true,
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

doctorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

doctorSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

doctorSchema.methods.generateAccessToken = function () {
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

export const DoctorUser = mongoose.model("DoctorUser", doctorSchema);
