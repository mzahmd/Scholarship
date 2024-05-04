import express from "express";

import { findOneUserByID } from "../models/userModel.js";

const router = express.Router();

router.get("/", async function (req, res) {
  if(req.session.userID) {
    const user = await findOneUserByID(req.session.userID);
    return res.status(200).send(user);
  }
  res.status(409).send("failed");
});

export default router;
