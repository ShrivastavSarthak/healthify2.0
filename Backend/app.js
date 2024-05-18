import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import patientRoutes from "./router/patient.routes.js";
import doctorRoutes from "./router/doctor.routes.js";
import appointment from "./router/appointment.routes.js";
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(cors());

app.use("/api/v1", patientRoutes);
app.use("/api/v1", doctorRoutes);
app.use("/api/v1", appointment);
