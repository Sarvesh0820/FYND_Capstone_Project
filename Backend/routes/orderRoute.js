import express from "express"
import {placeOrder,
    placeOrderRazor,
    userOrders,
    allOrders,
    updateStatus,
    verifyRazorpay
} from "../controllers/orderController.js"
import adminAuth from "../middlewares/adminAuth.js"
import authUser from "../middlewares/auth.js"
    
const orderRouter = express.Router()
// admin features
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// payment features
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/razorpay', authUser, placeOrderRazor)

// user feature
orderRouter.post('/userorders', authUser, userOrders)

// verify payment
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter