import Room from '../models/Room.js';import Student from '../models/Student.js';import Fee from '../models/Fee.js';import Complaint from '../models/Complaint.js';import Attendance from '../models/Attendance.js';import Visitor from '../models/Visitor.js';import Notice from '../models/Notice.js';import Lease from '../models/Lease.js';import Maintenance from '../models/Maintenance.js';import Inventory from '../models/Inventory.js';import Expense from '../models/Expense.js';import { asyncHandler } from '../utils/asyncHandler.js';
export const dashboard=asyncHandler(async(req,res)=>{
 if(req.user.role==='student'){
  const student=await Student.findOne({user:req.user._id}).populate('room');
  const [fees,complaints,attendance,visitors,notices,leases]=await Promise.all([Fee.find({student:student?._id}).sort('-createdAt').limit(6),Complaint.find({student:student?._id}).sort('-createdAt').limit(6),Attendance.find({student:student?._id}).sort('-date').limit(10),Visitor.find({student:student?._id}).sort('-createdAt').limit(5),Notice.find({audience:{$in:['all','students']}}).sort('-createdAt').limit(5),Lease.find({student:student?._id}).sort('-createdAt').limit(3)]);
  return res.json({role:'student',student,fees,complaints,attendance,visitors,notices,leases});
 }
 const [rooms,students,pendingFees,paidFees,openComplaints,todaysAttendance,insideVisitors,notices,maintenance,inventory,expenses]=await Promise.all([
  Room.countDocuments(),Student.countDocuments({status:'active'}),Fee.find({status:{$ne:'paid'}}),Fee.find({status:'paid'}),Complaint.countDocuments({status:{$nin:['resolved','closed']}}),Attendance.countDocuments({date:new Date().toISOString().slice(0,10)}),Visitor.countDocuments({status:'inside'}),Notice.find().sort('-createdAt').limit(5),Maintenance.find().sort('-createdAt').limit(6),Inventory.find().sort('-createdAt').limit(6),Expense.find().sort('-createdAt').limit(6)
 ]);
 const revenue=paidFees.reduce((s,f)=>s+(f.amount||0)+(f.lateFee||0),0); const pending=pendingFees.reduce((s,f)=>s+(f.amount||0)+(f.lateFee||0),0);
 res.json({role:req.user.role,cards:{rooms,students,revenue,pending,openComplaints,todaysAttendance,insideVisitors},notices,maintenance,inventory,expenses});
});
