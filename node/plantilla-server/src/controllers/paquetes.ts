import {Request, Response} from 'express';
import { dataPaquetes } from '../data/dbPaquetes';
import { Paquete } from '../models/Paquete';

class PaquetesController{

    private paquetes : Paquete[];

    constructor(){
        this.paquetes = dataPaquetes;
    }
    
    public getPaquetes = (req: Request, res:Response) => {
        res.json(this.paquetes)
    }

    public getPaqueteByID = (req: Request, res:Response) => {
        let id = req.params.id
        let paquete = this.paquetes.find((item) => item.id.toString() === id)
        res.json(paquete)
    }

    public newPaquete = (req: Request, res:Response) => {
        let { nombre, peso, img } = req.body

        let tmpPaquete = {
            id: this.paquetes.length == 0 ? 1 : this.paquetes[this.paquetes.length - 1 ].id + 1,
            nombre,
            peso,
            img,
        }
        this.paquetes.push(tmpPaquete)
    
        res.json(tmpPaquete)
    }

    public updatePaquete = (req: Request, res:Response) => {
        let id : string = req.params.id
        let { nombre, peso, img } = req.body
        let tmpPaquete
    
        try {
            for (let [index, item] of this.paquetes.entries()) {
                if(id === item.id.toString()){
                    tmpPaquete = {
                        ...item,
                        nombre, peso, img
                    }
                    this.paquetes[index] = tmpPaquete
                }
            }
        
            if(tmpPaquete){
                console.log()
                res.status(200).json(tmpPaquete)
            }else{
                res.status(404).json({response: 'ID not found'})
            }
        } catch (error : any) {
            res.status(500).json({ response: error.message })
        }
    }

    public removePaquete = (req: Request, res:Response) => {
        let id = req.params.id
        this.paquetes = this.paquetes.filter( (item) => item.id.toString() !== id )
        res.json(this.paquetes)
    }
}
export const paquetesController = new PaquetesController();