import express from "express";
import userRouter from "./routes/userRoutes";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api", userRouter);
app.use("/api", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
