const express=require('express')
const app=express()

const dotenv=require('dotenv')
dotenv.config()

const bodyParser=require('body-parser')
app.use(bodyParser.json())

const cors=require('cors')

const routers=require('./router')

const mongoose=require('mongoose')

const connectParonst  = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

mongoose.connect(process.env.DB_CONNECT,connectParonst)
.then(()=>console.log("connected"))
.catch((error)=>console.log(`error ${error}`))

app.use(cors(),routers)

app.listen(process.env.PORT,()=>console.log("listen"))