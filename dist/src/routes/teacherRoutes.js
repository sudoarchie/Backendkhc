"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/teacherRoutes.ts
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/login", authMiddleware_1.authenticateTeacher, authController_1.teacherLogin);
exports.default = router;
//# sourceMappingURL=teacherRoutes.js.map