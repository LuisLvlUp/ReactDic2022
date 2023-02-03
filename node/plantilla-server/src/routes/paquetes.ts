import { Router } from 'express';//definir un enrutador
import { paquetesController } from '../controllers/paquetes';

class PaquetesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', paquetesController.getPaquetes);
        this.router.get('/:id', paquetesController.getPaqueteByID);
        this.router.post('/', paquetesController.newPaquete);
        this.router.put('/:id', paquetesController.updatePaquete);
        this.router.delete('/:id', paquetesController.removePaquete);

    }
}
const paquetesRoutes = new PaquetesRoutes();
export default paquetesRoutes.router;