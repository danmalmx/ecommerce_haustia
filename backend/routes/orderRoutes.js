import express from 'express'
const router = express.Router();
import { authUser, registerUser, getUserProfile, updateUserProfile} from "../controllers/userController.js";
import { addOrderItems} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'



router.route('/').post(protect, addOrderItems);


export default router
