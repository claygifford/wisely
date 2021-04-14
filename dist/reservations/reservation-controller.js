"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class ReservationController {
    constructor() {
        this.path = '/reservation';
        this.router = express.Router();
        this.reservations = [
            {
                author: 'Marcin',
                content: 'Dolor sit amet',
                title: 'Lorem Ipsum',
            }
        ];
        this.getAllReservations = (request, response) => {
            response.send(this.reservations);
        };
        this.createReservation = (request, response) => {
            const post = request.body;
            this.reservations.push(post);
            response.send(post);
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAllReservations);
        this.router.post(this.path, this.createReservation);
    }
}
exports.default = ReservationController;
//# sourceMappingURL=reservation-controller.js.map