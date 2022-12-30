import Joi from "joi";

export const schemaSign = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  
  password: Joi.string().min(3).max(30).required()
})

export const schemaPost  =  Joi.object({
  datevent: Joi.string().required()
})
