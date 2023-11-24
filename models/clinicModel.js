// models/clinicModel.js
import mongoose from "mongoose";

export const Clinic = mongoose.model(
  "Clinic",
  new mongoose.Schema({
    clinicName: { type: String, required: true },
    location: { type: String, required: true },
    doctors: [{ doctorName: String, specialization: String }],
  }),
  "Clinic"
);
