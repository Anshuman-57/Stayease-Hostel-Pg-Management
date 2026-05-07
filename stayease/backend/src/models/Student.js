import mongoose from 'mongoose';
const schema = new mongoose.Schema({ user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}, guardianName:String, guardianPhone:String, collegeCompany:String, address:String, idProof:String, joiningDate:{type:Date,default:Date.now}, exitDate:Date, status:{type:String,enum:['active','left','pending'],default:'active'}, room:{type:mongoose.Schema.Types.ObjectId,ref:'Room'}, bedNo:String, monthlyRent:{type:Number,default:0}, securityDeposit:{type:Number,default:0} },{timestamps:true});
export default mongoose.model('Student', schema);
