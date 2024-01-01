import express from "express";
import UserModel from "../../database/user";
import passport from "passport";
import { validateSignup } from "../../Validation/auth";

//Models


const Router = express.Router();
/*
Route    :/signup
Des      :"singup with email and password"
Params   :none
Access   :Public
Method   :POST

*/
Router.post("/signup", async (req, res) => {

    try {
        await validateSignup(req.body.credentials)
        // const { email, phoneNumber } = await req.body.credentials
        await UserModel.findBYEmailAndPhone(req.body.credentials)
        const newUser = await UserModel.create(req.body.credentials)
        const token = newUser.generateJwtToken()
        return res.status(201).send({ token, message: "inserted succesfully" })


    }
    catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

/*
Route    :/signup
Des      :"singup with email and password"
Params   :none
Access   :Public
Method   :POST

*/
Router.post("/signin", async (req, res) => {
    try {
        await validateSignin(req.body.credentials)
        const user = await UserModel.findUserByEmailAndPassWord(req.body.credentials)
        const token = user.generateJwtToken()
        return res.status(201).send({ token, status: "success" })
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})





//Static and Methods in mongoose
//They both are function
//Methods -- when intantiat
//static -- 

/*
Route    :/google
Des      :"sigin"
Params   :none
Access   :Public
Method   :GET

*/
Router.get("/google", passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]
}))

/*
Route    :/auth/callback
Des      :"google sigin callback"
Params   :none
Access   :Public
Method   :GET

*/
Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        return res.send({ token: req.session.passport.user.token })
    })

    export default Router
