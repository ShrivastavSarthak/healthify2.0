import { Appointments } from "../models/appointment.models.js";
import { DoctorUser } from "../models/doctor.modal.js";
import { PatientUser } from "../models/patient.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const bookAppointment = asyncHandler(async(req, res) => {
    const { patient, doctor, date, reason } = req.body;

    const existPatient = await PatientUser.findById(patient);
    const existDoctor = await DoctorUser.findById(doctor);

    if (!existPatient || !existDoctor) {
        res.status(404).json({ message: "Patient or doctor not found !!" });
    }

    const newAppointment = new Appointments({
        patient,
        doctor,
        date,
        reason,
    });

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
    const { userId } = req.body;
    const appointments = await Appointments.find({ patient: userId });

    if (!appointments) {
        res.status(404).json({ message: "Sorry user don't have any appointment" });
    }
    res.status(200).json({ message: "Appointments successfully", appointments });
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

    if (!updateAppointment)
        return res.status(400).json({ message: "Appointment not found!!" });

    return res
        .status(400)
        .json({ message: "Appointment update successfully ", updateAppointment });
});