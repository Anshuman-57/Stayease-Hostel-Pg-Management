import mongoose from 'mongoose';
const schema = new mongoose.Schema({ user:{type:mongoose.Schema.Types.ObjectId,ref:'User'}, action:String, entity:String, entityId:String, meta:Object, ip:String },{timestamps:true});
export default mongoose.model('AuditLog', schema);
