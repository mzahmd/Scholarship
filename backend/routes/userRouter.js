import express from "express";

import { findAllUser } from "../models/userModel.js";

const router = express.Router();

router.get("/", async function (req, res) {
  const user = await findAllUser();
  res.status(200).send(user);
});

export default router;
