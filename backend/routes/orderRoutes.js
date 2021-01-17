import express from 'express'
const router = express.Router();
import { addOrderItems, getOrderById, updateorderToPaid, getMyOrders, getOrders } from '../controllers/orderController.js'
import { isAdmin, protect } from '../middleware/authMiddleware.js'

router.route('/myorders').get(protect, getMyOrders);
router.route('/').post(protect, addOrderItems).get(protect, isAdmin, getOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateorderToPaid);

export default router
