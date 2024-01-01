import joi from 'joi'

export const validateFood =(foodDetails)=>{
    const Schema =joi.object({
        name:joi.string().required(),
        descript:joi.string().required(),
        isVeg:joi.boolean().required(),
        isContainsEgg:joi.boolean().required(),
        category:joi.string().required(),
        photos:joi.string().required(),
        price:joi.number().required(),
        addOns:joi.array().items(joi.string()),
        restaurent:joi.string()
    })
    return Schema.validateAsync(foodDetails)
}
