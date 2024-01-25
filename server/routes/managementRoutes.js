import { Router } from "express";
import { getAdmins, getPerformance } from "../controllers/management.js";

const router = Router();

router.get('/admins', getAdmins);
router.get('/performance/:id', getPerformance);

export default router;
