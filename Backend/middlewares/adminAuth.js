import jwt from "jsonwebtoken"

const adminAuth = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({
                success: false,
                message: "Not Authorized"
            })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({
                success: false,
                message: "Not Authorized"
            })
        }
        next()
    } catch (error) {
        console.error(error)
        return res.json({
            success: false,
            message: "Not Authorized"
        })
    }
}

export default adminAuth