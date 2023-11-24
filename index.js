import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { AppointmentRoute } from './routes/appointmentRoutes.js';
import { ClinicRoute } from './routes/clinicRoutes.js';
import { DoctorRoute } from './routes/doctorRoutes.js';
import { PatientRoute } from './routes/patientRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB_URL);

AppointmentRoute(app)
ClinicRoute(app)
DoctorRoute(app)
PatientRoute(app)

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT || 8800}`);
  });

