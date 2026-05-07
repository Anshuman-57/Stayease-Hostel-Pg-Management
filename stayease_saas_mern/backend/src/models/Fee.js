import mongoose from 'mongoose';
const schema = new mongoose.Schema({ student:{type:mongoose.Schema.Types.ObjectId,ref:'Student',required:true}, month:{type:String,required:true}, amount:{type:Number,required:true}, dueDate:Date, status:{type:String,enum:['pending','paid','overdue'],default:'pending'}, paidAt:Date, paymentMode:{type:String,default:'cash'}, transactionId:String, lateFee:{type:Number,default:0}, notes:String },{timestamps:true});
schema.index({student:1,month:1},{unique:true});
export default mongoose.model('Fee', schema);
