import express from "express";
import cors from "cors";

import authRouter from "./routes/authRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.listen(3000, () => console.log("Listening on Port 3000"));
