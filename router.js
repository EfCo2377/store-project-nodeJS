const router=require('express').Router()
const productsFunctions=require('./controlers/Product')
const userFunctions=require('./controlers/User')

//get
router.get('/getAllProducts',productsFunctions.getAllProducts)
router.get('/getProductById/:idProduct',productsFunctions.getProductById)

//post
router.post('/addProduct',productsFunctions.addProduct)
router.post('/createUser',userFunctions.createUser)
router.post('/login',userFunctions.login)


//put
router.put('/updateProduct/:idProduct',productsFunctions.updateProduct)
router.put('/updateUser/:idUser',userFunctions.updateUser)

//delete
router.delete('/deleteProductById/:idProduct',productsFunctions.deleteProductById)


module.exports=router