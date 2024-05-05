import express from "express";
import {
  createApplication,
  findAllApplications,
  findApplicationsByUserID,
} from "../models/applicationModel.js";

const router = express.Router();

router.get("/", async function (req, res) {
  if (req.session.isAdmin) {
    const applications = await findAllApplications();
    res.send(applications);
  } else {
    const applications = await findApplicationsByUserID(req.session.userID);
    console.log(applications);
    res.send(applications);
  }
});

router.post("/create", async function (req, res) {
  await createApplication({ ...req.body, userID: req.session.userID });
  res.send("success");
});

export default router;
