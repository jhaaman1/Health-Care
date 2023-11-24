import { Doctor } from "../models/doctorModel.js";
import DoctorController from "../services/doctorController.js";

export const DoctorRoute = (app) => {
  app.post("/add/doctors", async (req, res) => {
    try {
      await DoctorController.addDoctor(req, res);
    } catch (e) {
      console.error(e);
      res.status(e.code).send({ message: e.message });
    }
  });

  app.get("/show/doctors", async (req, res) => {
    try {
      await DoctorController.showAllDoctors(req, res);
    } catch (e) {
      console.error(e);
      res.status(e.code).send({ message: e.message });
    }
  });
};
