import express from 'express';
import { getUser, createUser, updateUser , getAllUsers, deleteUser} from '../controllers/userController.js';
import { ensureAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// router.get('/user-data', ensureAuth, getUser);
router.get('/data/:id', getUser);
router.get('/all', getAllUsers);
router.post('/createUser', createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
 

export default router;
