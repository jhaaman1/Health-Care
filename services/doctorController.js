import { Doctor } from "../models/doctorModel.js";

const DoctorController = {
  addDoctor: async (req, res) => {
    try {
      const { doctorName, specialization } = req.body;
      if (!doctorName || !specialization) {
        throw {
          code: 400,
          message:
            "Invalid request body. Make sure to provide doctorName and specialization.",
        };
      }
      const newDoctor = new Doctor({ doctorName, specialization });
      const savedDoctor = await newDoctor.save();
      res.json(savedDoctor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  showAllDoctors: async (req,res) => {
    try{
      const showDoctors = await Doctor.find().exec();
      res.status(200).send(showDoctors);
    }
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // addClinicsToDoctor: async (req, res) => {
  //   try {
  //     const { doctorId } = req.params;
  //     const { doctorName, specialization } = req.body;
    
  //     const doctor = await Doctor.findById(doctorId);
  //     console.log("clinic", clinic);
    
  //     if (!clinic) {
  //       return res.status(404).json({ message: "Clinic not found." });
  //     }
    
  //     const existingDoctorInClinic = clinic.doctors.find(
  //       (doc) => doc.doctorName === doctorName
  //     );
    
  //     console.log("doctor", doctorName);
  //     console.log("clinic", clinic);
    
  //     if (!existingDoctorInClinic) {
  //       const existingDoctorGlobally = await Doctor.findOne({ doctorName });
    
  //       if (existingDoctorGlobally) {
  //         clinic.doctors.push({ doctorName, specialization });
  //         console.log("Doctor added to Clinic", clinic);
  //         await clinic.save();
  //         return res.json(clinic);
  //       } else {
  //         res.send("Doctor does not exist globally");
  //       }
  //     } else {
  //       res.send("Doctor already exists in Clinic");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
     
  // },
};

export default DoctorController;
