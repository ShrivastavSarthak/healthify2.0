import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PatientUser",
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DoctorUser",
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    appointmentLink: {
        type: String,
    },
    status: {
        type: String,
        enum: ["scheduled", "complete", "cancelled"],
        default: "scheduled",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const Appointments = mongoose.model("Appointment", appointmentSchema);