import { Router } from 'express';
import  {categoryController} from '../controllers/category.controller.js'


const category = Router();
category.get('/category', categoryController )
category.get('/subcategory', categoryController)
export default category;
