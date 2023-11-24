// models/clinicModel.js
import mongoose from "mongoose";

export const Appointment = mongoose.model(
  "Appointment",
  new mongoose.Schema({
    patient: { type: String, required: true },
    doctor: { type: String, required: true },
    clinic: { type: String, required: true },
    dateTime: { type: Date, required: true },
  }),
  "Appointment"
);
