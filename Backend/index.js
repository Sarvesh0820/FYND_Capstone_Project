import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDb from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"


// App Configuration
const app = express()
const PORT = process.env.PORT || 4000
connectDb()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())


// api endpoints
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)

app.get("/", (req, res) => {
    res.send("hello backend")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})