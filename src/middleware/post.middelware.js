import {schemaSign} from './joi.middelware.js'
import { postsSchema } from '../utils/valid.js'

export  const POST = (req, res, Toxirrrr) => {
  try {
    if(req.url == '/sign' && req.method == "POST"){
      
      let validet = schemaSign.validate(req.body)
      
      if(validet.error) throw new Error(validet.error)
      
      Toxirrrr()
      
    }
    if(req.url == '/addPost' && req.method == "POST"){
      
      let validate = postsSchema.validate(req.body)
      
      if(validate.error) throw new Error(validate.error)
      
      Toxirrrr()
      
    }

    
  } catch (error) {
    res.status(400).send({status: error.status, message:error.message})
  }
  
  
}



