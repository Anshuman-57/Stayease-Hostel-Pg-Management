import 'dotenv/config';import express from 'express';import cors from 'cors';import helmet from 'helmet';import morgan from 'morgan';import rateLimit from 'express-rate-limit';import { connectDB } from './config/db.js';import authRoutes from './routes/authRoutes.js';import appRoutes from './routes/appRoutes.js';import { notFound,errorHandler } from './middleware/error.js';
const app=express(); await connectDB();
app.use(helmet()); app.use(cors({origin:process.env.CLIENT_URL||'http://localhost:5173'})); app.use(express.json({limit:'2mb'})); app.use(morgan('dev')); app.use(rateLimit({windowMs:15*60*1000,limit:300}));
app.get('/',(req,res)=>res.json({name:'StayEase SaaS API',status:'ok'}));
app.use('/api/auth',authRoutes); app.use('/api',appRoutes); app.use(notFound); app.use(errorHandler);
const PORT=process.env.PORT||5000; app.listen(PORT,()=>console.log(`API running on ${PORT}`));
