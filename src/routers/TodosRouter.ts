import * as express from 'express';
import { Router } from 'express';
import TodosController from '../controllers/TodosController';

const router = Router();
const todosController = new TodosController();

router.get('/todos', todosController.get);

export default router;