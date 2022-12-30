import { Router } from 'express';
import { POST } from '../middleware/post.middelware.js';
import UserSign from '../controllers/user.sing.controllers.js';
import { read, write } from '../utils/model.js';
import { checkToken } from '../utils/tokens.js';
import { GETPENDING, USERSAPPLY, USERSEJECT } from '../controllers/admin.controller.js';

const router = Router();

router.post('/sign', POST, UserSign);

router.get("/getPending", checkToken, GETPENDING)

router.get("/usersApply/:postId", checkToken, USERSAPPLY)


router.get("/usersReject/:postId", checkToken, USERSEJECT)


export default router;
