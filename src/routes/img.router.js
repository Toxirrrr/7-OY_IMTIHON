import { Router } from "express"
import { GET } from './../controllers/img.controllers.js'

const router = Router()

router.get('/getImg', GET)

export default router