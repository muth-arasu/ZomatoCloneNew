//libraries
import express from 'express'
import passport from 'passport'

//databse model
import ImageModel from '../../database/image'
import MenuModel from '../../database/menu'

//validation
import { validateMenu } from '../../Validation/menu'


const Router = express.Router()

/*
Route    :/list
Des      :Get all menus based on id
Params   :id
Access   :Public
Method   :GET
*/
Router.get('/list/:_id', async (req,res)=>{
    try {
        const {_id} = req.params
        const menus =await MenuModel.findOne({_id})
        if(!menus) return res.status(404).send({error:`No menus availble for that ${_id}`})
        return res.status(200).send({menus})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
/*
Route    :/c
Des      :Get all foods Foods based on catagory
Params   :catagory
Access   :Public
Method   :GET
*/
Router.get('/image/:id', async (req,res)=>{
    try {
        const {_id} = req.params
        const images =await ImageModel.find({_id})
        if(!images) return res.status(404).send({error:`No images availble for that ${catagory}`})
        return res.status(200).send({images})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

export default Router