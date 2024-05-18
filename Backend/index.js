import dotenv from "dotenv";
import { connectDB } from "./db/dbconnect.js";
import { app } from "./app.js";

connectDB()
    .then(() => {
        app.listen(5000, () => {
            console.log("====================================");
            console.log("Server connected at", 5000);
            console.log("====================================");
        });
    })
    .catch((err) => {
        console.log("mongodb connection error: ", err);
    });