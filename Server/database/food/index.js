import mongoose from "mongoose"


const FoodSchama =new mongoose.Schema({
    name:{type:String ,required:true},
    descript:{type:String,required:true},
    isVeg:{type:Boolean,required:true},
    isContainsEgg:{type:Boolean,required:true},
    category:{type:String,required:true},
    Photos:{
        type:mongoose.Types.ObjectId,
        ref:"Images",
    },
    price:{type:Number,default:150, required:true},
    addOns:[{
        type:mongoose.Types.ObjectId,
        ref:"Foods",
          },],
    resturent:{
        type:mongoose.Types.ObjectId,
        ref:"Restaurents",
        required:"true"
    }
},
{
    timestampes :true
},
)
 const FoodModel=mongoose.model("Foods",FoodSchama)
 export default FoodModel