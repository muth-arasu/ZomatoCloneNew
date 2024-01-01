import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const UserSchema = new mongoose.Schema({
  fullName: { type: String, required:true},
  email: { type: String, required: true },
  password: { type: String },
  address: [{ detail: { type: String }, for: { type: String } }],
  phoneNumber: [{ type: Number }],
}, {
  timestamps: true,
});

//functions
UserSchema.methods.generateJwtToken=function(){
  return jwt.sign({user:this._id.toString()},"ZomatoApp")
}


//Statics
UserSchema.statics.findBYEmailAndPhone = async ({email, phoneNumber}) => {
  //check whether email 

  const userNameExit = await UserModel.findOne({ phoneNumber })
  const userEmailExit = await UserModel.findOne({ email })

  if (userNameExit || userEmailExit) {
    throw new Error("User Already Exist...")
  }
  return false
}
UserSchema.statics.findUserByEmailAndPassWord= async ({email,password})=>{
  const user =await UserModel.findOne({email})
  if(!user)  throw new Error("Sorry User doesnot Exit");
  //compare password
  const doesPasswordMatch= bcrypt.compare(password,user.password)
  if(!doesPasswordMatch) throw new Error("Invalid Password")
  return user
}

//methods
UserSchema.pre("save", function (next) {
  const user = this;
  //check whether the password is modified
  if (!user.isModified("password")) return next();

  // genete bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error)

    //hash the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error)

      user.password = hash;
      return next()
    })
  })

})
const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
