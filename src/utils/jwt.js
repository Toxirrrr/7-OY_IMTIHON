import jvt from 'jsonwebtoken'
import { SECRET } from './../config.js'

export default {
  sign: (payload)=>jvt.sign(payload, SECRET),
  verify: (token)=> jwt.verify(token, SECRET)
}