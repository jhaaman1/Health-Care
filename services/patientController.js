import { Patient } from "../models/patientModel.js";

const PatientController = {
  addPatient: async (req, res) => {
    try {
      const { patientName, contactNumber } = req.body;
      if (!patientName || !contactNumber) {
        throw {
          code: 400,
          message:
            "Invalid request body. Make sure to provide patientName and contactNumber.",
        };
      }
      const newPatient = new Patient({ patientName, contactNumber });
      const savedPatient = await newPatient.save();
      res.json(savedPatient);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default PatientController;
