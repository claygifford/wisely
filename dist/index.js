"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const reservation_controller_1 = require("./reservations/reservation-controller");
const app = new app_1.default(process.env.PORT || 3000, [
    new reservation_controller_1.default()
]);
app.listen();
//# sourceMappingURL=index.js.map