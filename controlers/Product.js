const Product=require('../models/Product')

//get all products
const getAllProducts=async(req,res)=>{
    let products=await Product.find()
    try {
        res.status(200).json(products)
    } catch (error) {
        res.status(400).send(error)
    }
}
const getAllProductsByCategory=async(req,res)=>{
    try {
            let products=await Product.find({category:req.params.idCategory})
            res.status(200).json(products)
    }
    catch (error) {
            res.status(400).send(error)
    }
}
//add product
const addProduct=async(req,res)=>{
    try {
        let product=new Product(req.body)
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(400).send(error)
    }
}

//delete product by id
const deleteProductById=async(req,res)=>{
    try{
        let {idProduct}=req.params
        let product=await Product.findByIdAndDelete(idProduct)
        res.status(200).json(product)
    }catch(error){
        res.status(400).send(error)
    }
}

//get product by id
const getProductById=async(req,res)=>{
    try {
        let product=await Product.findById(req.params.idProduct)
        res.status(200).json(product)
    } catch (error) {
        res.status(404).send(error)
    }
}

//update product
const updateProduct=async(req,res)=>{
    try {
        let product=await Product.findByIdAndUpdate(req.params.idProduct,req.body,{new:true})
        res.status(200).json(product)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports={addProduct,deleteProductById,getProductById,updateProduct,getAllProducts,getAllProductsByCategory}