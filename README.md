Frontend URL: https://fynd-capstone-ecommerce-frontend.vercel.app/
Admin URL: https://fynd-capstone-ecommerce-admin.vercel.app/
Backend URL: https://fynd-capstone-ecommerce-backend.vercel.app/





# 🛍️ E-Commerce Backend API

A robust backend API for an E-Commerce application, supporting user authentication, product management, cart handling, order placement (including Razorpay integration), and admin functionalities.

---

## ⚙️ Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Razorpay Payment Gateway**
- **Cloudinary** (for image uploads)
- **CORS**, **dotenv**, **body-parser**

---

## 📦 Features

- 🧑 User Signup / Login (JWT Auth)
- 🛒 Cart Management
- 📦 Product CRUD (Admin)
- 📬 Order Placement (COD / Razorpay)
- 📊 Admin Panel Support (order control, update status)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sarvesh0820/FYND_Capstone_Project/Backend.git
cd Backend

npm install

.env

MONGODB_URI = 
CLOUDINARY_API_KEY = 
CLOUDINARY_SECRET_KEY = 
CLOUD_NAME = 
JWT_SECRET = 
PORT = 4000
RAZORPAY_KEY_SECRET = 
RAZORPAY_KEY_ID =

start the server

npm run start

folder structure
Backend/
├── config/
│   ├── cloudinary.js
│   └── mongodb.js
├── controllers/
│   ├── orderController.js
│   ├── productController.js
│   └── userController.js
│   └── cartController.js
├── models/
│   ├── models.orderModel.js
│   ├── models.productModel.js
│   └── models.userModel.js
├── routes/
│   ├── orderRoute.js
│   ├── productRoute.js
│   └── userRoute.js
│   └── cartRoute.js
├── .env
├── index.js
└── package.json

# 🛍️ E-Commerce Frontend API

```bash
git clone https://github.com/Sarvesh0820/FYND_Capstone_Project/Frontend.git
cd Frontend

npm install

start project
npm run dev

