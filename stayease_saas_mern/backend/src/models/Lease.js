import mongoose from 'mongoose';
const schema = new mongoose.Schema({ student:{type:mongoose.Schema.Types.ObjectId,ref:'Student',required:true}, startDate:Date, endDate:Date, rent:Number, deposit:Number, terms:String, status:{type:String,enum:['draft','active','expired','terminated'],default:'active'} },{timestamps:true});
export default mongoose.model('Lease', schema);
