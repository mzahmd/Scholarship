import express from "express";
import { createUser, findOneUser } from "../models/userModel.js";

const router = express.Router();

router.post("/login", async function (req, res) {
  const user = await findOneUser(req.body);
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  res.status(200).send("Success");
});

router.post("/register", async function (req, res) {
  if (await findOneUser(req.body)) {
    return res.status(409).json({ msg: "User already exists" });
  }

  await createUser({
    email: req.body.email,
    password: req.body.password,
  });

  res.status(201).send("success");
});

export default router;
