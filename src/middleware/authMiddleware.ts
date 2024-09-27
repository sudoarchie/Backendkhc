import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticateTeacher = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Access Denied" });
    return;
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET as string) as {
      role: string;
    };

    if (verified.role !== "teacher") {
      res.status(403).json({ message: "Not authorized" });
      return;
    }

    next(); // Call next middleware or route handler
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
