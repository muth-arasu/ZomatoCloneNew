//libraries
import express from 'express'

//databse model
import OrderModel from '../../database/order';

//validation 
import { validateOrder } from '../../Validation/order';

const Router = express.Router()

/*
Route    :/
Des      :Get all Orders based on Order id
Params   :_id
Access   :Public
Method   :GET
*/

Router.get("/:_id", async (req,res)=>{
    try {
        const {_id} = req.params;
        const  getAllOrders = await OrderModel.findOne({user:_id})      
        if(!getAllOrders) return res.status(404).send({error :`No order id of ${_id} found for this users`})
        return res.status(200).send({Orders : getAllOrders})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
/*
Route    :/
Des      :Place New Orders
Params   :_id
Body     :OrderDetails
Access   :Public
Method   :POST
*/

Router.post("/new/:_id", async (req,res)=>{
    try {
        await validateOrder(req.body)
        const {_id} = req.params;
        const {orderDetails} = req.body;
                
        const  newOrder = await OrderModel.findOneAndUpdate({user:_id},{$push :{orderDetails:orderDetails}},{new:true})      
        if(!newOrder) return res.status(404).send({error:`No Users found id of ${_id} found for this users`})
        return res.status(200).send({Orders : newOrder})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})





export default Router