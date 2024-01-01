import joi from 'joi'

export const validateOrder = (orderDetails) => {
    const Schema = joi.object({
        user: joi.string(),
        orderDetails: joi.array().items(joi.object({
            food: joi.string().required(),
            quantity: joi.string.required(),
            paymode: joi.string().required(),
            status: joi.string(),
            paymentDails: joi.object({
                itemTotal: joi.number().required(),
                promo: joi.number().required(),
                tax: joi.number().required(),
            })
        })),
        orderRatings:joi.number().required(),
    })
    return Schema.validateAsync(orderDetails)
}
