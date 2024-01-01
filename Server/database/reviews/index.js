import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    food:{type:mongoose.Types.ObjectId, ref:"Foods"},
    restaurent:{type:mongoose.Types.ObjectId,ref:"Retaurents"},
    user:{type:mongoose.Types.ObjectId,ref:"users"},
    ratings:{type:Number},
    reviewText:{type:String,required:true},
    photos:[
        {type:mongoose.Types.ObjectId, ref:"Images"},
    ],

},
{
    timestampes :true
},
)

 const ReviewModel =mongoose.model("Reviews",ReviewSchema)
 export default ReviewModel