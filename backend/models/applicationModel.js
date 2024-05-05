import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  department: String,
  degree: String,
  facultysemester: String,
  userID: { type: Number, require: true },
});

const Application = mongoose.model("application", applicationSchema);

export async function findApplicationsByUserID(userID) {
  return await Application.aggregate([
    { $match: { userID: new mongoose.Schema.Types.ObjectId(userID) } },
  ]);
}

export async function findAllApplications() {
  return await Application.find();
}
