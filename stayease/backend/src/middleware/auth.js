import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export const protect = async (req,res,next)=>{
  try{
    const h=req.headers.authorization||''; const token=h.startsWith('Bearer ')?h.slice(7):null;
    if(!token) return res.status(401).json({message:'Not authorized'});
    const decoded=jwt.verify(token, process.env.JWT_SECRET||'secret');
    const user=await User.findById(decoded.id);
    if(!user || !user.isActive) return res.status(401).json({message:'User inactive or missing'});
    req.user=user; next();
  }catch(e){ return res.status(401).json({message:'Invalid or expired token'}); }
};
export const allow = (...roles)=>(req,res,next)=> roles.includes(req.user.role) ? next() : res.status(403).json({message:'Forbidden for your role'});
