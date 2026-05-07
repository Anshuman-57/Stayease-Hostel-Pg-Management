import mongoose from 'mongoose';
const schema = new mongoose.Schema({ title:String, body:String, audience:{type:String,enum:['all','staff','students'],default:'all'}, priority:{type:String,enum:['normal','important','urgent'],default:'normal'}, expiresAt:Date, createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'} },{timestamps:true});
export default mongoose.model('Notice', schema);
