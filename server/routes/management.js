import express from "express";
import {getAdmins, getUserPerformanace} from "../controllers/management.js"

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformanace)

export default router;