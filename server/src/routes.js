import { Router } from 'express';
import ItemController from './app/controllers/ItemController';
const routes = new Router();

routes.get('/api/items', ItemController.listItems);
routes.get('/api/items/:id', ItemController.detailItems);

export default routes;


