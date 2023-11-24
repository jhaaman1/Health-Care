import { Clinic } from "../models/clinicModel.js";
import { Doctor } from "../models/doctorModel.js";

const ClinicController = {
  addClinic: async (req, res) => {
    try {
      const { clinicName, location } = req.body;
      const newClinic = new Clinic({ clinicName, location });
      const savedClinic = await newClinic.save();
      res.json(savedClinic);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addDoctorToClinic: async (req, res) => {
    try {
      const { clinicId } = req.params;
      const { doctorName, specialization } = req.body;
    
      const clinic = await Clinic.findById(clinicId);
      console.log("clinic", clinic);
    
      if (!clinic) {
        return res.status(404).json({ message: "Clinic not found." });
      }
    
      const existingDoctorInClinic = clinic.doctors.find(
        (doc) => doc.doctorName === doctorName
      );
    
      // console.log("doctor", doctorName);
      // console.log("clinic", clinic);
    
      if (!existingDoctorInClinic) {
        const existingDoctorGlobally = await Doctor.findOne({ doctorName });
    
        if (existingDoctorGlobally) {
          clinic.doctors.push({ doctorName, specialization });
          console.log("Doctor added to Clinic", clinic);
          await clinic.save();
          return res.json(clinic);
        } else {
          res.send("Doctor does not exist globally");
        }
      } else {
        res.send("Doctor already exists in Clinic");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
     
  },
};

export default ClinicController;
