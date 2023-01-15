import express from 'express'
import { getMyOrder, getUserOrders, order } from '../controller/orderController.js';

const OrderRoutes = express.Router();

//Create Orders
OrderRoutes.post('/add', order)

//Get User Orders
OrderRoutes.get('/find/:userId', getUserOrders);

//Get My Order
OrderRoutes.get('/:id', getMyOrder);

export default OrderRoutes;