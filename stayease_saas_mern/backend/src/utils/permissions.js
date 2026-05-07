export const ROLES = { ADMIN:'admin', STAFF:'staff', STUDENT:'student' };
export const isAdmin = u => u?.role === ROLES.ADMIN;
export const isStaff = u => [ROLES.ADMIN, ROLES.STAFF].includes(u?.role);
