//libraries
import express from 'express'
import passport from 'passport'

//databse model
import { RestaurentModel } from '../../database/restaurant'

//validation
import { validateRestaurent } from '../../Validation/restaurent'

const Router = express.Router()

/*
Route    :/
Des      :Get all the restaurent details based in city
Params   :none
Access   :Public
Method   :GET

*/
// qurey params : restaurant/?city=chennai
Router.get("/",async (req,res)=>{
try {
const {city} = req.query;
const allRestaurents = await RestaurentModel.find({city})
if(!allRestaurents) return res.status(404).send({error:"Restaurents Not Found"})
return res.status(200).send({allRestaurents})
}
 catch (error) {
    return res.status(500).send({error: error.message})
}
})

/*
Route    :/
Des      :Get individual restaurent details based in id
Params   :id
Access   :Public
Method   :GET
*/

Router.get("/:id", async(req,res)=>{
    try {
        const{_id}=req.params;
        const restaurant = await RestaurentModel.findOnde(_id)
        if(!restaurant) return res.status(404).send({error:"Restaurent Not Found"})
        return res.status(200).send({restaurant})
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
})

/*
Route    :/
Des      :Get restaurents details based on search string
Params   :id
Body     :searchString
Access   :Public
Method   :GET
*/

Router.get("/search", async (req,res)=>{
 try {
    const {searchString} = req.body
    const restaurents = await RestaurentModel.find({name:{$regex:searchString,$options:i},})
    if(!restaurents) return res.status(404).send({error:`No Restaurent matched with ${searchString}` })
    return res.status(200).send({restaurents})
 } catch (error) {
    res.status(500).send({error:error.message})
 }
})



export default Router

