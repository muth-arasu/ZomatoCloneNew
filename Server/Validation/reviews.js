import joi from 'joi'

export const validateReviews =(reviewDetails)=>{
    const Schema = joi.object({
        food:joi.string(),
        restaurent:joi.string(),
        user:joi.string(),
        ratings:joi.string(),
        reviewText:joi.string(),
        photos:joi.array().items(joi.string())
        
    })

    return Schema.validateAsync(reviewDetails)
}