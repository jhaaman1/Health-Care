import { Patient } from "../models/patientModel.js";
import PatientController from "../services/patientController.js";

export const PatientRoute = (app) => {
    app.post('/add/patient', async (req, res) => {
        try {
            await PatientController.addPatient(req, res);
        } catch (e) {
            console.error(e);
            res.status(e.code || 500).send({ message: e.message || "Internal Server Error" });
        }
    });
};
