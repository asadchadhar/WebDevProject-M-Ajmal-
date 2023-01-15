import express from 'express'
import { createProduct, getAllProduct, getProduct } from '../controller/productController.js';
import verifyTokenAndAdmin from '../verifyToken.js';

const ProductRoutes = express.Router();

//Create Product and only admin add a product
ProductRoutes.post('/add', verifyTokenAndAdmin, createProduct);

//Get all Products
ProductRoutes.get('/all', getAllProduct);

//Get one Product
ProductRoutes.get('/:id', getProduct);

export default ProductRoutes;