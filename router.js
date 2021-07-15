const router=require('express').Router()
const productsFunctions=require('./controlers/Product')
const userFunctions=require('./controlers/User')
const categoriesFunctions=require('./controlers/Categoties')

//get
router.get('/getAllProducts',productsFunctions.getAllProducts)
router.get('/getProductById/:idProduct',productsFunctions.getProductById)
router.get('/getAllCategories',categoriesFunctions.getAllCategories)

//post
router.post('/addProduct',productsFunctions.addProduct)
router.post('/createUser',userFunctions.createUser)
router.post('/login',userFunctions.login)
router.post('/addCategory',categoriesFunctions.addCategory)


//put
router.put('/updateProduct/:idProduct',productsFunctions.updateProduct)
router.put('/updateUser/:idUser',userFunctions.updateUser)

//delete
router.delete('/deleteProductById/:idProduct',productsFunctions.deleteProductById)


module.exports=router