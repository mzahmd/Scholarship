import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

import authRouter from "./routes/authRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

await mongoose.connect(process.env.MONGODB_URL)

app.use("/api/auth", authRouter);

app.listen(3000, () => console.log("Listening on Port 3000"));
