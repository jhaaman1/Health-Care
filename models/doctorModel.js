// models/doctorModel.js
import mongoose from "mongoose";

export const Doctor = mongoose.model(
  "Doctor",
  new mongoose.Schema({
    doctorName: { type: String, required: true },
    specialization: { type: String, required: true },
    clinics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Clinic" }],
  }),
  "Doctor"
);
