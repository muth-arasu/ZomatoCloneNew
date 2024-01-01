//libraries
import express from 'express'
import passport from 'passport'

//databse model
import FoodModel from '../../database/food'

//validation
import { validateFood } from '../../Validation/food'

const Router = express.Router()

/*
Route    :/r
Des      :Get all foods Foods based on restaurent
Params   :id
Access   :Public
Method   :GET
*/
Router.get('/r/:_id', async (req,res)=>{
    try {
        const {_id} = req.params
        const foods =await FoodModel.find({restaurent:_id})
        if(!foods) return res.status(404).send({error:`No foods availble for that ${_id}`})
        return res.status(200).send({foods})
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
Router.get('/r/:catagory', async (req,res)=>{
    try {
        const {catagory} = req.params
        const foods =await FoodModel.find({catagory})
        if(!foods) return res.status(404).send({error:`No foods availble for that ${catagory}`})
        return res.status(200).send({catagory})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

export default Router