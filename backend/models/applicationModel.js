import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  department: String,
  degree: String,
  facultysemester: String,
  userID: { type: mongoose.Schema.Types.ObjectId, require: true },
});

const Application = mongoose.model("application", applicationSchema);

export async function findApplicationsByUserID(userID) {
  return await Application.aggregate([
    { $match: { userID: new mongoose.Types.ObjectId(userID) } },
  ]);
}

export async function findAllApplications() {
  return await Application.find();
}

export async function createApplication(params) {
  await Application.create({ ...params });
}
