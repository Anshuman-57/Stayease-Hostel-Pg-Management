import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Student from '../models/Student.js';
import { asyncHandler } from '../utils/asyncHandler.js';
const sign=u=>jwt.sign({id:u._id,role:u.role}, process.env.JWT_SECRET||'secret', {expiresIn:'7d'});
export const login=asyncHandler(async(req,res)=>{ const {email,password}=req.body; const user=await User.findOne({email}).select('+password'); if(!user||!(await user.comparePassword(password))) return res.status(401).json({message:'Invalid credentials'}); user.lastLogin=new Date(); await user.save(); const safe=user.toObject(); delete safe.password; res.json({token:sign(user), user:safe}); });
export const register=asyncHandler(async(req,res)=>{ const {name,email,password,role='student',phone}=req.body; if(await User.findOne({email})) return res.status(400).json({message:'Email already exists'}); const user=await User.create({name,email,password,role,phone}); if(role==='student') await Student.create({user:user._id}); res.status(201).json({token:sign(user), user}); });
export const me=asyncHandler(async(req,res)=>{ let student=null; if(req.user.role==='student') student=await Student.findOne({user:req.user._id}).populate('room'); res.json({user:req.user, student}); });
