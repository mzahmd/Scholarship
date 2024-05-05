import express from "express";
import { findOneUserByID } from "../models/userModel.js";

const router = express.Router();

router.get("/isadmin", async function (req, res) {
  const user = await findOneUserByID(req.session.userID);

  if (!user) {
    return res.status(409).send("User not found");
  }
  return res.status(200).send(user.isAdmin);
});

export default router;
