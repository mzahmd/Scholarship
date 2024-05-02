import express from "express";

const router = express.Router();

router.post("/login", function (req, res) {
  res.json({mesg: "login Post"});
});

router.post("/register", function (req, res) {
  
  res.json({mesg: "Register Post"});
});

export default router