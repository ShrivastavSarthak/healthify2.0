import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://sarthak:20112002@cluster0.ikycj0t.mongodb.net/"
    );
    console.log("mongodb connected ");
  } catch (error) {
    console.log("this is the error", error);
  }
};
