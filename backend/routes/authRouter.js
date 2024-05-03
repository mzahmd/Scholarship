import express from "express";
import {
  comparePassword,
  createUser,
  findOneUser,
} from "../models/userModel.js";

const router = express.Router();

router.post("/login", async function (req, res) {
  const user = await findOneUser(req.body);
  if (!user) {
    return res.status(404).json({ msg: "Benutzer nicht gefunden" });
  } else if (!(await comparePassword(req.body.password, user.password))) {
    return res
      .status(404)
      .json({ msg: "Email oder Passwort falsch eingegeben" });
  }

  req.session.user = user.email;
  res.status(200).send("success");
});

router.post("/register", async function (req, res) {
  if (await findOneUser(req.body)) {
    return res
      .status(409)
      .json({ msg: "Benutzer mit der Email-Adresse existiert schon" });
  }

  await createUser({
    email: req.body.email,
    password: req.body.password,
  });

  res.status(201).send("success");
});

router.post("/logout", function (req, res) {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }
    });

    res.status(200).send("success");
  }
});

export default router;
