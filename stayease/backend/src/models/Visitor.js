import mongoose from 'mongoose';
const schema = new mongoose.Schema({ student:{type:mongoose.Schema.Types.ObjectId,ref:'Student'}, visitorName:String, phone:String, purpose:String, idProof:String, checkIn:{type:Date,default:Date.now}, checkOut:Date, status:{type:String,enum:['inside','checked_out'],default:'inside'}, recordedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'} },{timestamps:true});
export default mongoose.model('Visitor', schema);
