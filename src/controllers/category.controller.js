import {read} from '../utils/model.js'

export const  categoryController = (req, res)=>{
  
  let {id} = req.query
  
  let categorys = read('category')
  let subcategory = read('subcategory')
  
  categorys = categorys.filter((category)=>{
    return category.subcategory = subcategory.filter(e=>e.category_id ==  category.category_id && delete e.category_id)
  })

  if(id){
    categorys = categorys.filter((e)=>e.category_id == id)
    return res.status(200).send(categorys)
  }
  
  res.status(200).send(categorys)
}