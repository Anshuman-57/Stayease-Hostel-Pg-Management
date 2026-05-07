import AuditLog from '../models/AuditLog.js';
export async function audit(req, action, entity, entityId='', meta={}){
  try { await AuditLog.create({ user:req.user?._id, action, entity, entityId, meta, ip:req.ip }); } catch(e) { console.error('audit failed', e.message); }
}
