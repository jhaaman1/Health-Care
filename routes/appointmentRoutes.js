import AppointmentController from "../services/appointmentController.js"

export const AppointmentRoute = (app) => {
    app.post('/bookAppointment', async (req, res) => {
        try {
          await  AppointmentController.bookAppointment(req, res);
        } catch (e) {
          console.error(e);
          res.status(e.code).send({ message: e.message });
        }
      })
}