import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/models.productModel.js"

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller, image } = req.body
        
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === "true" ? true : false,
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData)
          
        const product = await new productModel(productData)
        await product.save()
        res.status(201).json({message: "Product Uploaded Successfully"})
      
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Failed to Upload Product"})
  }
    
}

const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.status(200).json({message: "Product Removed Successfully"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Failed to Remove Product"})
    }
}

const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.status(200).json(products)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Failed to Get Products"})
        
    }
    
}

const singleProduct = async(req, res) => {
    try {
        const product = await productModel.findById(req.body.id)
        res.status(200).json({ message: "Product Found",product })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Failed to Get Product"})
    }
}

export {addProduct, removeProduct, listProduct, singleProduct}