"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class ReservationController {
    constructor() {
        this.path = '/reservation';
        this.router = express.Router();
        this.reservations = [
            {
                name: 'John Doe',
                status: 'Active',
                time: '12 PM',
                email: 'johndoe@gmail.com',
                partysize: 12
            }
        ];
        this.slots = [
            {
                hour: '1 AM',
                times: this.emptySlot
            },
            {
                hour: '2 AM',
                times: this.emptySlot
            },
            {
                hour: '3 AM',
                times: this.emptySlot
            },
            {
                hour: '4 AM',
                times: this.emptySlot
            },
            {
                hour: '5 AM',
                times: this.emptySlot
            },
            {
                hour: '6 AM',
                times: this.emptySlot
            },
            {
                hour: '7 AM',
                times: this.emptySlot
            },
            {
                hour: '8 AM',
                times: this.emptySlot
            },
            {
                hour: '9 AM',
                times: this.emptySlot
            },
            {
                hour: '10 AM',
                times: this.emptySlot
            },
            {
                hour: '11 AM',
                times: this.emptySlot
            },
            {
                hour: '12 PM',
                times: this.emptySlot
            },
            {
                hour: '1 PM',
                times: this.emptySlot
            },
            {
                hour: '2 PM',
                times: this.emptySlot
            },
            {
                hour: '3 PM',
                times: this.emptySlot
            },
            {
                hour: '4 PM',
                times: this.emptySlot
            },
            {
                hour: '5 PM',
                times: this.emptySlot
            },
            {
                hour: '6 PM',
                times: this.emptySlot
            },
            {
                hour: '7 PM',
                times: this.emptySlot
            },
            {
                hour: '8 PM',
                times: this.emptySlot
            },
            {
                hour: '9 PM',
                times: this.emptySlot
            },
            {
                hour: '10 PM',
                times: this.emptySlot
            },
            {
                hour: '11 PM',
                times: this.emptySlot
            }
        ];
        this.getReservations = (request, response) => {
            response.send(this.reservations);
        };
        this.createReservation = (request, response) => {
            const post = request.body;
            this.reservations.push(post);
            response.send(post);
        };
        this.getInventory = (request, response) => {
            response.send(this.slots);
        };
        this.setInventory = (request, response) => {
            response.send(this.slots);
            const post = request.body;
            this.slots.push(post);
            response.send(post);
        };
        this.intializeRoutes();
    }
    get emptySlot() {
        return [
            { available: 0, reserved: 0, interval: '0' },
            { available: 0, reserved: 0, interval: '15' },
            { available: 0, reserved: 0, interval: '30' },
            { available: 0, reserved: 0, interval: '45' }
        ];
    }
    intializeRoutes() {
        this.router.get(this.path + '/getreservations', this.getReservations);
        this.router.post(this.path + '/createreservation', this.createReservation);
        this.router.get(this.path + '/getinventory', this.getInventory);
        this.router.post(this.path + '/setinventory', this.setInventory);
    }
}
exports.default = ReservationController;
//# sourceMappingURL=reservation-controller.js.map