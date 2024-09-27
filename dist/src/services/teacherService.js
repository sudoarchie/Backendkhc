"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginTeacher = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const loginTeacher = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const teacher = yield prisma.teacher.findUnique({ where: { email } });
    if (!teacher)
        throw new Error("Teacher not found");
    const passwordMatch = yield bcrypt_1.default.compare(password, teacher.password);
    if (!passwordMatch)
        throw new Error("Invalid password");
    const token = jsonwebtoken_1.default.sign({ id: teacher.id, role: "teacher" }, process.env.JWT_SECRET);
    return { token };
});
exports.loginTeacher = loginTeacher;
//# sourceMappingURL=teacherService.js.map