import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);
