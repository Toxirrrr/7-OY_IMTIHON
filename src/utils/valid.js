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

export const postSchema = Joi.object({
    title: Joi.string().min(8).required().trim(),
    body: Joi.string().min(8).required().trim(),
    count: Joi.number(),
    delete_at: Joi.string().min(2).trim().required(),
    dataH: Joi.string().required().trim(),
    dataY: Joi.string().required().trim(),
    tel: Joi.string().min(2).required().trim(),
    status: Joi.string().trim(),
    dataX: Joi.string().min(2).required().trim(),
    date_to: Joi.string().trim(),
    fullname: Joi.string().min(2).required().trim(),
    avatar: Joi.string().pattern(new RegExp(/\.(gif|jpe?g|png|webp)$/i)).trim()
})


export const schemaSign = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    
    password: Joi.string().min(3).max(30).required()
  })
  
  export const schemaPost  =  Joi.object({
    datevent: Joi.string().required()
  })
  