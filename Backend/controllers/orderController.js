
import orderModel from "../models/models.orderModel.js"
import userModel from "../models/models.userModel.js"
import razorpay from "razorpay"

const currency = "INR"

// gateway initialization
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

// placing orders  using COD
const placeOrder = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const { userId, items, amount, address } = req.body
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })
        
        res.json({
            success: true,
            message: "Order Placed"
        })


    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

// placing orders  using razorpay

const placeOrderRazor = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const { userId, amount, items, address } = req.body
        
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Razorpay",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const options = {
            amount: amount * 100,
            currency,
            receipt: newOrder._id.toString()
        }

        await razorpayInstance.orders.create(options, (error,order) => {
            if (error) {
                console.log(error)
                return res.json({
                    success: false,
                    message: error
                })
            }
            res.json({
                success: true,
                order
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

const verifyRazorpay = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const { userId, razorpay_order_id } = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if (orderInfo.status === "paid") {
            await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} })
            res.json({
                success: true,
                message: "Payment Successfull"
            })
        } else {
            res.json({
                success: false,
                message: "Payment Failed"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

// all orders data for admin panel

const allOrders = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const orders = await orderModel.find({})
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

// user order data for frontend

const userOrders = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
try {
    const { userId } = req.body
    const orders = await orderModel.find({ userId })
    res.json({
        success: true,
        orders
    })
} catch (error) {
    console.log(error)
    res.json({
        success: false,
        message: error.message
    })
}
}


// update order status

const updateStatus = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({
            success: true,
            message: "Status Updated"
        })
    } catch (error) {
        console.log(error)
    res.json({
        success: false,
        message: error.message
    })
    }
}

export {
    placeOrder,
    placeOrderRazor,
    userOrders,
    allOrders,
    updateStatus,
    verifyRazorpay
}