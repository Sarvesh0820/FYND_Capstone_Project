import jwt from "jsonwebtoken"

const adminAuth = (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.status(401).json({ message: "Not Authorized" })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ message: "Not Authorized" })
        }
        next()
    } catch (error) {
        console.error(error)
        return res.status(401).json({ message: "Not Authorized" })
    }
}

export default adminAuth