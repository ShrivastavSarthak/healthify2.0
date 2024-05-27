import nodemailer from "nodemailer";
import { Appointments } from "../models/appointment.models.js";
import { DoctorUser } from "../models/doctor.modal.js";
import { PatientUser } from "../models/patient.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Transporter } from "../utils/transporter.js";

export const bookAppointment = asyncHandler(async(req, res) => {
    const { patient, doctor, date, reason, name, phoneNo, email } = req.body;

    const existPatient = await PatientUser.findById(patient);
    const existDoctor = await DoctorUser.findById({ _id: doctor }, { password: 0 });

    if (!existPatient || !existDoctor) {
        res.status(404).json({ message: "Patient or doctor not found !!" });
    }

    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email" });
    }

    const newAppointment = new Appointments({
        patient,
        name,
        phoneNo,
        email,
        doctor,
        date,
        reason,
    });



    const doctorMail = {
        from: "sarthakkumar2026@gmail.com",
        to: existDoctor.email,
        subject: "Appointment Booked",
        text: `Hi ${existDoctor.fullName}, your appointment has been booked on ${req.body.date} with ${existPatient.fullName} with reason ${req.body.reason}.`,
    };
    const patientMail = {
        from: "sarthakkumar2026@gmail.com",
        to: req.body.email,
        subject: "Appointment Booked",
        text: `Hi ${req.body.name}, your appointment has been booked on ${req.body.date} at ${req.body.doctorName} with reason ${req.body.reason}.`,
    };

    await Transporter.sendMail(patientMail);
    await Transporter.sendMail(doctorMail);

    await newAppointment.save();

    res.status(201).json({
        message: "Appointment booked successfully",
    });
});

export const fetchAppointmentById = asyncHandler(async(req, res) => {
    const { id } = req.body;
    const getAppointment = await Appointments.findById(id);

    if (!getAppointment) {
        res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ message: "Appointment found", getAppointment });
});

export const fetchAllAppointmentsByPatients = asyncHandler(async(req, res) => {
    const { id } = req.params;
    console.log(id);
    const appointments = await Appointments.find({ patient: id });

    if (appointments.length === 0) {
        res.status(404).json({ message: "Sorry user don't have any appointment" });
    } else {
        res
            .status(200)
            .json({ message: "Appointments successfully", appointments });
    }
});

export const fetchAllAppointmentsByDoctor = asyncHandler(async(req, res) => {
    const { id } = req.params;
    console.log(id);
    const appointments = await Appointments.find({ doctor: id });

    if (appointments.length === 0) {
        res.status(404).json({ message: "Sorry user don't have any appointment" });
    } else {
        res
            .status(200)
            .json({ message: "Appointments successfully", appointments });
    }
});

export const updateAppointment = asyncHandler(async(req, res) => {
    const { id } = req.params;
    const { date, reason, appointmentLink, status } = req.body;

    const updateAppointment = await Appointments.findByIdAndUpdate(
        id, {
            date,
            reason,
            appointmentLink,
            status,
        }, { new: true }
    );

    console.log(updateAppointment);

    if (!updateAppointment)
        return res.status(400).json({ message: "Appointment not found!!" });

    const userdetails = await PatientUser.findById(updateAppointment.patient);

    if (appointmentLink.length != 0) {
        const appointmentLink = {
            from: "sarthakkumar2026@gmail.com",
            to: userdetails.email,
            subject: "Appointment link",
            text: `Hi ${userdetails.fullName},Your appointment is ${updateAppointment.status} on ${updateAppointment.date} your appointment link is ${updateAppointment.appointmentLink}`,
        };

        await Transporter.sendMail(appointmentLink);
    }
    return res.status(400).json({
        message: "Appointment update successfully ",
        updateAppointment,
    });
});