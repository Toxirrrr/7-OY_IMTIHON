import crypto from 'crypto'

const Hash = (value)=>{
  return crypto.createHash('sha256').update(value).digest('hex')
}

export {
  Hash
}