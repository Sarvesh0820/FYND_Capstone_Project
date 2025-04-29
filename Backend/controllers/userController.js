import validator from "validator"
import userModel from "../models/models.userModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
// route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })
        
        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if (isMatch) {
            const token = createToken(user._id)
            res.json({success:true, token })
        } else {
            return res.json({
                success: false,
                message: "Invalid password"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: "Error creating user"
        })
    }

}

// route for register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        
        //if user already exists
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({
                success: false,
                message: "User already exists"
            })
        }

        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Invalid email"
            })
        }

        if (password.length < 6) {
            return res.json({
                success:false,
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
        res.json({
            success: true,
            message: "User created successfully", token
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Error creating user"
        })
        }
        
}

// route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password,process.env.JWT_SECRET)
            res.json({success:true,token:token, message: "Admin logged in successfully",success: true })
        } else {
            res.json({
                success: false,
                message: "Invalid email or password"
            })
        }
    } catch (error) {
        console.error(error)
        res.json({success:false, message: "Error logging in admin" })
    }

}

export {loginUser, registerUser, adminLogin}