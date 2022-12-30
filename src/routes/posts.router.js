import { Router } from 'express';
import { GET, POSTS } from '../controllers/posts.controller.js';
import { POST } from './../middleware/post.middelware.js'

const router = Router();

router.get("/posts", GET)
router.post("/addPost", POST, POSTS)

export default router;