import googleOauth from "passport-google-oauth20"
import UserModel from "../database/user"
import passport from "passport"
import dotenv from "dotenv"
dotenv.config()

const googleStrategy = googleOauth.Strategy
export default (passport) => {
    passport.use(
        new googleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:9000/auth/google/callback",

        },
            async (accessToken , refreshToken, profile, done) => {
                // creating new user
                const newUser = {
                    fullname: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value
                }
                try {
                    //check whether the email exist or not
                    const user = await UserModel.findOne({ email: newUser.email })

                    if (user) {
                        //generate Token
                        const token = user.generateJwtToken()
                        //return user
                        done(null, { user, token })
                    }
                    else {
                        //create new user
                        const user = await UserModel.create(newUser)
                        //generate Token
                        const token = user.generateJwtToken()
                        //return user

                        done(null, { user, token })
                    }
                } catch (error) {
                    done(error, null)
                }
            }
        )
    )
    passport.serializeUser((UserData, done) => done(null, { ...UserData }))
    passport.deserializeUser((id, done) => done(null, id))
}
