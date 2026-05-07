import express from 'express';import {login,register,me} from '../controllers/authController.js';import {protect,allow} from '../middleware/auth.js';
const r=express.Router(); r.post('/login',login); r.post('/register',protect,allow('admin'),register); r.get('/me',protect,me); export default r;
