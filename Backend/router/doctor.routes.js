import { Router } from "express";
import { docSignup, doctorSignIn } from "../controller/doctor.controller.js";

const router = Router();

router.route("/doctor/signup").post(docSignup);
router.route("/doctor/signin").post(doctorSignIn);
export default router;
