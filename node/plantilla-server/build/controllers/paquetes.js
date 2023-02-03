"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paquetesController = void 0;
const dbPaquetes_1 = require("../data/dbPaquetes");
class PaquetesController {
    constructor() {
        this.getPaquetes = (req, res) => {
            res.json(this.paquetes);
        };
        this.getPaqueteByID = (req, res) => {
            let id = req.params.id;
            let paquete = this.paquetes.find((item) => item.id.toString() === id);
            res.json(paquete);
        };
        this.newPaquete = (req, res) => {
            let { nombre, peso, img } = req.body;
            let tmpPaquete = {
                id: this.paquetes.length == 0 ? 1 : this.paquetes[this.paquetes.length - 1].id + 1,
                nombre,
                peso,
                img,
            };
            this.paquetes.push(tmpPaquete);
            res.json(tmpPaquete);
        };
        this.updatePaquete = (req, res) => {
            let id = req.params.id;
            let { nombre, peso, img } = req.body;
            let tmpPaquete;
            try {
                for (let [index, item] of this.paquetes.entries()) {
                    if (id === item.id.toString()) {
                        tmpPaquete = Object.assign(Object.assign({}, item), { nombre, peso, img });
                        this.paquetes[index] = tmpPaquete;
                    }
                }
                if (tmpPaquete) {
                    console.log();
                    res.status(200).json(tmpPaquete);
                }
                else {
                    res.status(404).json({ response: 'ID not found' });
                }
            }
            catch (error) {
                res.status(500).json({ response: error.message });
            }
        };
        this.removePaquete = (req, res) => {
            let id = req.params.id;
            this.paquetes = this.paquetes.filter((item) => item.id.toString() !== id);
            res.json(this.paquetes);
        };
        this.paquetes = dbPaquetes_1.dataPaquetes;
    }
}
exports.paquetesController = new PaquetesController();
