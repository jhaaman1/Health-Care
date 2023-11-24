import { Appointment } from "../models/appointmentModel.js";
import { Clinic } from "../models/clinicModel.js";
import { Doctor } from "../models/doctorModel.js";
import { Patient } from "../models/patientModel.js";

const AppointmentController = {
  bookAppointment: async (req, res) => {
    try {
      const { patientName, doctorName, clinicName, dateTime } = req.body;

      const existingPatient = await Patient.findOne({patientName: patientName});
      console.log('new',existingPatient)
      if (!existingPatient) {
        return res.status(400).json({ message: "Patient not found. Please add your details first." });
      }
      const existingDoctor = await Doctor.findOne({doctorName: doctorName});
      if (!existingDoctor) {
        return res.status(400).json({ message: "Doctor not found." });
      }
      const existingClinic = await Clinic.findOne({clinicName: clinicName});
      if (!existingClinic) {
        return res.status(400).json({ message: "Clinic not found." });
      }

      const newAppointment = new Appointment({
        patient: existingPatient.patientName,
        doctor: existingDoctor.doctorName,
        clinic: existingClinic.clinicName,
        dateTime: dateTime,
      });
      

      const savedAppointment = await newAppointment.save();
      res.json(savedAppointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default AppointmentController;
