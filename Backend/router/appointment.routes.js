import { Router } from "express";
import {
    bookAppointment,
    fetchAllAppointmentsByPatients,
    fetchAppointmentById,
    updateAppointment,
} from "../controller/appointment.controller.js";

const router = Router();

router.route("/appointment").post(bookAppointment);
router.route("/get-appointments/:id").get(fetchAllAppointmentsByPatients);

router.route("/get-appointment-id").get(fetchAppointmentById);
router.route("/update-appointment/:id").patch(updateAppointment);
export default router;