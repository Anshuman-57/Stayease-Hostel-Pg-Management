import mongoose from 'mongoose';
const schema = new mongoose.Schema({ student:{type:mongoose.Schema.Types.ObjectId,ref:'Student',required:true}, date:{type:String,required:true}, checkIn:Date, checkOut:Date, status:{type:String,enum:['present','absent','late','leave'],default:'present'}, markedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'} },{timestamps:true});
schema.index({student:1,date:1},{unique:true});
export default mongoose.model('Attendance', schema);
