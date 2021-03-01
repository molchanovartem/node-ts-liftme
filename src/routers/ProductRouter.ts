import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();
const productController = new ProductController();

router.post('/fetch', productController.fetch);
router.get('/list', productController.list);

export default router;