import express from "express";
import {
  comparePassword,
  createUser,
  findOneUserByEmail,
} from "../models/userModel.js";

const router = express.Router();

router.get("/", function (req, res) {
  if (req.session.userID) {
    return res.status(200).send("success");
  }
  res.status(409).send("No valid user");
});


router.post("/login", async function (req, res) {
  const user = await findOneUserByEmail(req.body);
  if (!user) {
    return res.status(404).json({ msg: "Benutzer nicht gefunden" });
  } else if (!(await comparePassword(req.body.password, user.password))) {
    return res
      .status(404)
      .json({ msg: "Email oder Passwort falsch eingegeben" });
  }

  req.session.userID = user._id;
  req.session.isAdmin = user.isAdmin;
  req.session.save();
  res.status(200).send("success");
});

router.post("/register", async function (req, res) {
  if (req.body.password !== req.body.password_wdh) {
    return res.status(401).json({ msg: "Passwörter stimmen nicht über ein" });
  }

  if (await findOneUserByEmail(req.body)) {
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

    return res.status(200).send("success");
  }
  res.status(401).send("failed to logout");
});

export default router;
