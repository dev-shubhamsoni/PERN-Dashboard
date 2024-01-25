import { Router } from "express";
import { getUser, getDashboard } from "../controllers/general.js";

const router = Router();

router.get('/user/:id', getUser);
router.get('/dashboard', getDashboard);

export default router;
