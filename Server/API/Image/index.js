//npm i aws-sdk
import express from 'express'
import multer from 'multer'

// Utilities
import { s3Upload } from '../../Utils/AWS/s3'


//env
require('dotenv').config()


//multer configs
const storage = multer.memoryStorage()
const upload =multer({storage})



const Router = express.Router()

/*
Route    :/
Des      :Get all foods Foods based on restaurent
Params   :none
Access   :Public
Method   :PUT
*/
Router.post('/',upload.single("file"), async (req,res)=>{
    try {
        const file = req.file
        const s3BucketOptions ={
            Bucket:"cloneofzomato",
            Key:file.originalname, //file 
            Body:file.buffer, // ram storage is a buffer
            contentType:file.mimetype,
            // ACL:"public-read"
        }
        
        const uploadImage= await s3Upload(s3BucketOptions)
        if(!uploadImage)
       return res.status(404).send("Plese check your file")   
       return res.status(201).send({uploadImage})
        
        
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

export default Router