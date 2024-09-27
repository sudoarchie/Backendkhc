import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const loginTeacher = async (email: string, password: string) => {
  const teacher = await prisma.teacher.findUnique({ where: { email } });
  if (!teacher) throw new Error("Teacher not found");

  const passwordMatch = await bcrypt.compare(password, teacher.password);
  if (!passwordMatch) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: teacher.id, role: "teacher" },
    process.env.JWT_SECRET
  );
  return { token };
};
