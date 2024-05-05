import express from "express";

import { findAllUser, findOneUserByID } from "../models/userModel.js";

const router = express.Router();

router.get("/", async function (req, res) {
  if (req.session.userID) {
    const user = await findOneUserByID(req.session.userID);
    return res.status(200).send(user);
  }
  res.status(409).send("failed");
});

router.get("/all", async function (req, res) {
  if(!req.session.isAdmin) {
    return res.status(400).send(users);
  }
  const users = await findAllUser();
  return res.status(200).send(users);
});

export default router;
