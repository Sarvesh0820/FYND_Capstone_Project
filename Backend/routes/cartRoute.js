import express from "express"
import { addToCart, updateCart, getCart } from "../controllers/cartController.js"
import authUser from "../middlewares/auth.js"

const cartRouter = express.Router()

cartRouter.post('/get',authUser, getCart)
cartRouter.post('/add',authUser, addToCart)
cartRouter.post('/update',authUser, updateCart)

export default cartRouter