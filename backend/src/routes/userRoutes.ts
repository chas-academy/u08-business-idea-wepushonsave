import express from 'express';
import { register, login, getMe, deleteAccount, changePassword } from '../controllers/userController';
import { auth } from '../middleware/auth2';

const usersRouter = express.Router();

usersRouter.post('/register', register);
usersRouter.post('/login', login);
usersRouter.get('/me', auth, getMe);
usersRouter.delete('/me/deleteuser', auth, deleteAccount);
usersRouter.put('/password', auth, changePassword);

export default usersRouter;
