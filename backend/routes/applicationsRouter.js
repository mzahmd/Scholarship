import express from "express";
import { findAllApplications } from "../models/applicationModel.js";

const router = express.Router();

router.get("/", async function (req, res) {
  const applications = await findAllApplications();

  res.send(applications);
});

export default router;
