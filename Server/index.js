import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'

require('dotenv').config()

const zomato = express()
//middlewares
zomato.use(express.json())
zomato.use(urlencoded({extended:false}))
zomato.use(cors())
zomato.use(helmet())

const {PORT}=process.env
const startServer = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DB}`);
        console.log(`Server Listening on Port ${PORT} 💨`);
    } catch (error) {
        console.log("Error connecting to the database:", error);
    }
}
zomato.listen(PORT,startServer)