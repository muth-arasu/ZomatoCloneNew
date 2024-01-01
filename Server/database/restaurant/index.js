import mongoose from "mongoose";


const RestaurentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    mapLocation: { type: String, required: true },
    cuisine: [String],
    restaurentTimings: {type:String},
    contactNumber: {type:Number},
    website: {type:String},
    popularDish: [String],
    averageCost: {type:Number},
    amenties: [String],
    menuImages: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },
    menu: {
        type: mongoose.Types.ObjectId,
        ref: "Menus"
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: "Reviews"
    }],
    photos: {
        type: {
            type: mongoose.Types.ObjectId,
            ref: "Images"
        }
    }

},
{
    timestampes :true
},
)

 const RestaurentModel = mongoose.model("Restaurent", RestaurentSchema)
 export default RestaurentModel