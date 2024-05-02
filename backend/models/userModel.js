import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

export async function createUser(params) {
  await User.create({ ...params });
}

export async function findOneUser(user) {
  return await User.findOne({ email: user.email });
}
