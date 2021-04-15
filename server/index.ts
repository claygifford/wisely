import App from './app';
import ReservationController from './reservations/reservation-controller';

const app = new App(
    process.env.PORT || 4000,
    [
        new ReservationController()
    ]
);
app.listen();