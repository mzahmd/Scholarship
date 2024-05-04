import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  department: String,
  degree: String,
  facultysemester: String,
  userID: { type: Number, require: true },
});

const Application = mongoose.model("application", applicationSchema);

export async function findAllApplications(userID) {
  return await Application.find({ userID: userID });
}
