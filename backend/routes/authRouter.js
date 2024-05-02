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
  await createUser({ email: req.body.email, password: req.body.password });
  res.json({ mesg: "Register Post" });
});

export default router;
