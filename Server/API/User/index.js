//libraries
import express from 'express'

//databse model
import UserModel from '../../database/user'


const UserRouter = express.Router()

/*
Route    :/
Des      :Get all Users
Params   :_userId
Body     :none
Access   :Public
Method   :GET
*/
UserRouter.get("/:_userId", async(req,res)=>{
try {
    const {_userId} = req
    const getUser = await UserModel.findById(_userId)
    if(!getUser) return res.status(404).send({error:`m=no user found for that ${_userId} `})
    return res.status(200).send({ User: getUser})
} catch (error) {
    return res.status(500).send({ error: error.message })
}

})
/*
Route    :/
Des      :Update the user details
Params   :_userId
Body     :userData
Access   :Public
Method   :GET
*/
UserRouter.put("/:_userId", async(req,res)=>{
try {
    const {_userId} = req.params
    const {userData} = req.body

    const updatedUserData = await UserModel.findByIdAndUpdate({_userId},{$set:userData },{new:true})
    if(!updatedUserData) return res.status(404).send({error:`m=no user found for that ${_userId} `})
    return res.status(201).send({ User: updatedUserData})
} catch (error) {
    return res.status(500).send({ error: error.message })
}

})





export default UserRouter