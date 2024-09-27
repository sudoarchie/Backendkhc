import express from "express";
import teacherRoutes from "./routes/teacherRoutes";
const port = 3000;
const app = express();

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.json({
    msg: "hello",
  });
  console.log("hello world");
});
app.use("/api/v1/teacher", teacherRoutes);

app.listen("3000", () => console.log(`http://localhost:${port}`));
