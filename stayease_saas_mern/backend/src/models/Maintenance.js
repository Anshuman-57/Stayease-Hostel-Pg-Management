import mongoose from 'mongoose';
const schema = new mongoose.Schema({ title:String, description:String, room:{type:mongoose.Schema.Types.ObjectId,ref:'Room'}, priority:{type:String,enum:['low','medium','high'],default:'medium'}, status:{type:String,enum:['open','in_progress','done'],default:'open'}, assignedTo:{type:mongoose.Schema.Types.ObjectId,ref:'User'}, cost:{type:Number,default:0}, dueDate:Date },{timestamps:true});
export default mongoose.model('Maintenance', schema);
