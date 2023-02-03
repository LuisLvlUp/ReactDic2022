"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const index_1 = require("../controllers/index");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //ruta inicial
        this.router.get('/', index_1.indexController.index);
        // this.router.post('/', indexController.index);
        // this.router.put('/', indexController.index);
        // this.router.delete('/', indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
