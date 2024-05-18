import { Router } from "express";
import {
  patientSignIn,
  patientSignup,
} from "../controller/patient.controller.js";

const router = Router();

router.route("/patient/signup").post(patientSignup);
router.route("/patient/signin").post(patientSignIn);
export default router;
