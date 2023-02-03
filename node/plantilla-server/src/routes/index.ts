import { Router } from 'express';//definir un enrutador
import { indexController } from '../controllers/index';

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/', indexController.index);
        // this.router.post('/', indexController.index);
        // this.router.put('/', indexController.index);
        // this.router.delete('/', indexController.index);

    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;