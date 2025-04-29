import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDb from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// App Configuration
const app = express()
const PORT = process.env.PORT || 4000
connectDb()
connectCloudinary()

// middlewares

app.use(cors({
  origin: 'https://fynd-capstone-ecommerce-admin.vercel.app',
  credentials: true
}));

app.use(express.json())


// api endpoints
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use('/api/cart', cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("hello backend")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})