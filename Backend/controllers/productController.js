

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body
        
        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        console.log(name, description, price, category, subCategory, sizes, bestseller)

        console.log(image1, image2, image3, image4)
        
        res.json({})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error adding product' })
    }
}

const removeProduct = async (req, res) => {
    
}

const listProduct = async(req, res) => {
    
}

const singleProduct = async(req, res) => {
    
}

export {addProduct, removeProduct, listProduct, singleProduct}