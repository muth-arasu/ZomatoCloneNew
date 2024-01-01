import joi from 'joi'
export const validateMenu =(menuDetails)=>{
    const Schema = joi.object({
        menu:joi.array().items(joi.object({
            name:joi.string().required(),
            items:joi.array.items(joi.string())
        })),
        recommended:joi.array().items(joi.string()),
    })
    return Schema.validateAsync(menuDetails)
}