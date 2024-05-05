import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  department: String,
  degree: String,
  facultysemester: String,
  userID: { type: Number, require: true },
});

const Application = mongoose.model("application", applicationSchema);

export async function findApplicationsByUserID(userID) {
  const id = new mongoose.Schema.ObjectId(userID);
  // console.log(userID);
  // console.log("-".repeat(20));
  // console.log(id);

  return await Application.find({
    // userID: id,
  });
}

export async function findAllApplications() {
  return await Application.find();
}
