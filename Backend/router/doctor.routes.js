import { Router } from "express";
import { docSignup, doctorSignIn, fetchDoctorById, getAllDoctors } from "../controller/doctor.controller.js";

const router = Router();

router.route("/doctor/signup").post(docSignup);
router.route("/doctor/signin").post(doctorSignIn);
router.route("/doctor/alldoctors").get(getAllDoctors);
router.route("/doctor/doctor").get(fetchDoctorById);
export default router;