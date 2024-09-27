import { Request, Response } from "express";
import { loginTeacher } from "../services/teacherService";

export const teacherLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await loginTeacher(email, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
