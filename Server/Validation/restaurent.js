import joi from 'joi'

export const validateRestaurent = (restaurentDetails)=>{
    const Schema =joi.object({
        name:joi.string().required(),
        city:joi.string().required(),
        address:joi.string().required(),
        mapLocation:joi.string().required(),
        cuisine:joi.object(joi.string()),
        name:joi.string(),
        contactNumber:joi.number(),
        website:joi.string(),
        popularDish:joi.object(joi.string()),
        averageCost:joi.string(),
        amenties:joi.object(joi.string()),
        menuImages:joi.string(),
        reviews:joi.string(),
        reviews:joi.object(joi.string()),
        photos:joi.object({type:joi.string()})


    })
    return Schema.validateAsync(restaurentDetails)       
}