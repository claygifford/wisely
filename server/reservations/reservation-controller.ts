import * as express from 'express';
import Reservation from './reservation';
 
class ReservationController {
  public path = '/reservation';
  public router = express.Router();
 
  private reservations: Reservation[] = [
    {
      author: 'Marcin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllReservations);
    this.router.post(this.path, this.createReservation);
  }
 
  getAllReservations = (request: express.Request, response: express.Response) => {
    response.send(this.reservations);
  }
 
  createReservation = (request: express.Request, response: express.Response) => {
    const post: Reservation = request.body;
    this.reservations.push(post);
    response.send(post);
  }
}
 
export default ReservationController;