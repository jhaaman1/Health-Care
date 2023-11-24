// models/patientModel.js
import mongoose from "mongoose";

export const Patient =  mongoose.model(
  "Patient",
  new mongoose.Schema({
    patientName: { type: String, required: true },
    contactNumber: { type: String, required: true },
  }),
  "Patient"
);
