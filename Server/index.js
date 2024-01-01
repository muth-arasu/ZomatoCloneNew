import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'
import passport from "passport";
import session from "express-session"; // Remove the duplicate import statement
//MicroServices Route
import Auth from "./API/Auth";
import RestaurentRoute from "./API/Restaurant"
import FoodRoute from './API/Food'
import ImageRoute from './API/Image'
//google authendication
import googleAuthConfig from "./config/google.config";
require('dotenv').config()

const zomato = express()
//middlewares
zomato.use(express.json())
zomato.use(urlencoded({ extended: false }))
zomato.use(cors())
zomato.use(helmet())
// Passport middleware configuration
zomato.use(
    session({
        secret: process.env.GOOGLE_CLIENT_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
zomato.use(passport.initialize());
zomato.use(passport.session());
// Configure Passport (make sure to create this file)
googleAuthConfig(passport);

// Application routes
zomato.use('/auth', Auth);
zomato.use('/restaurent',RestaurentRoute)
zomato.use('/foods',FoodRoute)
zomato.use('/image',ImageRoute)

const { PORT } = process.env
const startServer = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DB}`);
        console.log(`Server Listening on Port ${PORT} 💨`);
    } catch (error) {
        console.log("Error connecting to the database:", error);
    }
}
zomato.listen(PORT, startServer)