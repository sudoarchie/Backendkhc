"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateTeacher = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateTeacher = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Access Denied" });
        return;
    }
    try {
        const verified = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (verified.role !== "teacher") {
            res.status(403).json({ message: "Not authorized" });
            return;
        }
        next(); // Call next middleware or route handler
    }
    catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};
exports.authenticateTeacher = authenticateTeacher;
//# sourceMappingURL=authMiddleware.js.map