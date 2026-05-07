import mongoose from 'mongoose';
const schema = new mongoose.Schema({ title:String, category:String, amount:Number, date:{type:Date,default:Date.now}, paidBy:String, notes:String, createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'} },{timestamps:true});
export default mongoose.model('Expense', schema);
