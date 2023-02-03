"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const paquetes_1 = require("../controllers/paquetes");
class PaquetesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', paquetes_1.paquetesController.getPaquetes);
        this.router.get('/:id', paquetes_1.paquetesController.getPaqueteByID);
        this.router.post('/', paquetes_1.paquetesController.newPaquete);
        this.router.put('/:id', paquetes_1.paquetesController.updatePaquete);
        this.router.delete('/:id', paquetes_1.paquetesController.removePaquete);
    }
}
const paquetesRoutes = new PaquetesRoutes();
exports.default = paquetesRoutes.router;
