import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

export async function createUser(params) {
  const hashedPassword = await hashPassword(params.password);
  await User.create({ ...params, password: hashedPassword });
}

export async function findOneUser(user) {
  return await User.findOne({ email: user.email });
}

async function hashPassword(userPassword) {
  return await bcrypt.hash(userPassword, 10);
}

export async function comparePassword(userPassword, hashedPassword) {
  return await bcrypt.compare(userPassword, hashedPassword)
}