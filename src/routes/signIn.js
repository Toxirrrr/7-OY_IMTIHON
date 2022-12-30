import { Router } from 'express';
import signPost from '../controllers/user.sing.controllers.js';
import { POST } from '../middleware/post.middelware.js';

const router = Router();

router.post('/sign', POST, signPost);
export default router;
