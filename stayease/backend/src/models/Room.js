import mongoose from 'mongoose';
const bedSchema = new mongoose.Schema({ bedNo:String, status:{type:String,enum:['vacant','occupied','maintenance'],default:'vacant'}, student:{type:mongoose.Schema.Types.ObjectId,ref:'Student',default:null} }, {_id:false});
const schema = new mongoose.Schema({ roomNo:{type:String,required:true,unique:true}, floor:String, type:{type:String,default:'standard'}, rent:{type:Number,default:0}, capacity:{type:Number,required:true}, beds:[bedSchema], status:{type:String,enum:['active','maintenance','inactive'],default:'active'} },{timestamps:true});
export default mongoose.model('Room', schema);
