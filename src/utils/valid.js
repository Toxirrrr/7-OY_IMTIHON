import Joi from 'joi'

// export const loginSchema = Joi.object({
//     username: Joi.string().min(2).required(),
//     password: Joi.string().min(8).required()
// })

// export const registerSchema = Joi.object({
//     username: Joi.string().min(2).required(),
//     password: Joi.string().min(8).required(),
//     gender: Joi.valid('male', 'female'),
//     avatar: Joi.string().pattern(new RegExp(/\.(gif|jpe?g|png|webp)$/i))
// })

export const postsSchema = Joi.object({
    title: Joi.string().min(8).required(),
    body: Joi.string().min(8).required(),
    count: Joi.number(),
    delete_at: Joi.string().min(2).required(),
    dataH: Joi.string().required(),
    dataY: Joi.string().required(),
    tel: Joi.string().min(2).required(),
    status: Joi.string().min(2).required(),
    dataX: Joi.string().min(2).required(),
    date_to: Joi.string(),
    fullname: Joi.string().min(2).required(),
    avatar: Joi.string().pattern(new RegExp(/\.(gif|jpe?g|png|webp)$/i))
})
