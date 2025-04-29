import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDb from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import bodyParser from 'body-parser';


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: [
        'http://localhost:5174',
        'http://localhost:5173',
        'https://fynd-capstone-ecommerce-admin.vercel.app',
        'https://fynd-capstone-ecommerce-frontend.vercel.app'
    ],
    credentials: true,
}));

// App Configuration

const PORT = process.env.PORT || 4000
connectDb()
connectCloudinary()

// middlewares




// api endpoints
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use('/api/cart', cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send("hello backend")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})