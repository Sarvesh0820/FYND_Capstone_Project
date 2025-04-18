import validator from "validator"
import userModel from "../models/models.userModel.js"
import bcrypt from "bcryptjs/dist/bcrypt.js"
import jwt from "jsonwebtoken"

const createToken = (id) => {
    jwt.sign({id}, process.env.JWT_SECRET)
}
// route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })
        
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if (isMatch) {
            const token = createToken(user._id)
            res.json({succes:true, token })
        } else {
            return res.status(400).json({ message: "Invalid password" })
        }
    } catch (error) {
         res.status(500).json({ message: "Error creating user" })
    }

}

// toute for register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        
        //if user already exists
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.status(400).json({ message: "User already exists" })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email" })
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 8 characters"
                })
        }

        // hasing user's password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        // create new user
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })
        // save user to database
        const user = await newUser.save()

        const token = createToken(user._id)
        res.status(201).json({ message: "User created successfully", token })
    } catch (error) {
        res.status(500).json({ message: "Error creating user" })
        }
        
}

// route for admin login
const adminLogin = async (req, res) => {

}

export {loginUser, registerUser, adminLogin}