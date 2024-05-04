import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import cookieParser from "cookie-parser";

dotenv.config();

import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";

import { corsConfig } from "./config.js";

const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(
  session({
    secret: "asdf",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // One day
    },
  })
);

await mongoose.connect(process.env.MONGODB_URL);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);

app.listen(3000, () => console.log("Listening on Port 3000"));
