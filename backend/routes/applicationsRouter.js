import express from "express";
import { findAllApplications, findApplicationsByUserID } from "../models/applicationModel.js";

const router = express.Router();

router.get("/", async function (req, res) {
  if(req.session.isAdmin) {
    const applications = await findAllApplications();
    res.send(applications);
  } else {
    const applications = await findApplicationsByUserID(req.session.userID);
    res.send(applications);
  }

});

export default router;
