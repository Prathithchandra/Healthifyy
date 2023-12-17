// booking.js
import express from "express";
import { getMyAppointments ,updateMyAppointments} from "../Controllers/userController.js";
import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", getMyAppointments);
router.put("/:email",updateMyAppointments);

export default router;
