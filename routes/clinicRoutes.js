import { Clinic } from "../models/clinicModel.js";
import ClinicController from "../services/clinicController.js";

export const ClinicRoute = (app) => {
  app.post("/add/clinics", async (req, res) => {
    try {
      await ClinicController.addClinic(req,res)
    } catch (e) {
      console.error(e);
      res.status(e.code).send({ message: e.message });
    }
  });

  app.post("/add/doctorToClinics/:clinicId", async (req, res) => {
    try {
      await ClinicController.addDoctorToClinic(req,res)
    } catch (e) {
      console.error(e);
      res.status(e.code).send({ message: e.message });
    }
  });
};
