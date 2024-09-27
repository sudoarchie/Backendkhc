// src/routes/teacherRoutes.ts
import { Router } from "express";
import { teacherLogin } from "../controllers/authController";
import { authenticateTeacher } from "../middleware/authMiddleware";

const router = Router();

router.post("/login", authenticateTeacher, teacherLogin);

export default router;
