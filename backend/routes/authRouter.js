import express from "express";

const router = express.Router();

router.get("/login", function (req, res) {
  res.json({mesg: "login"});
});

router.post("/login", function (req, res) {
  res.json({mesg: "login Post"});
});

export default router