import mongoose from 'mongoose';
const schema = new mongoose.Schema({ name:String, category:String, quantity:{type:Number,default:0}, assignedRoom:{type:mongoose.Schema.Types.ObjectId,ref:'Room'}, status:{type:String,enum:['available','assigned','repair','retired'],default:'available'}, notes:String },{timestamps:true});
export default mongoose.model('Inventory', schema);
