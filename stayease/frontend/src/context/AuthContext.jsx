import React,{createContext,useContext,useEffect,useState}from'react';import api from '../api/client';
const AuthContext=createContext(null);export const useAuth=()=>useContext(AuthContext);
export function AuthProvider({children}){const [user,setUser]=useState(()=>JSON.parse(localStorage.getItem('user')||'null'));const [loading,setLoading]=useState(false);
 const login=async(email,password)=>{const {data}=await api.post('/auth/login',{email,password});localStorage.setItem('token',data.token);localStorage.setItem('user',JSON.stringify(data.user));setUser(data.user);return data.user};
 const logout=()=>{localStorage.removeItem('token');localStorage.removeItem('user');setUser(null);location.href='/login'};
 useEffect(()=>{const token=localStorage.getItem('token'); if(!token)return; setLoading(true); api.get('/auth/me').then(({data})=>{localStorage.setItem('user',JSON.stringify(data.user));setUser(data.user)}).catch(()=>logout()).finally(()=>setLoading(false));},[]);
 return <AuthContext.Provider value={{user,loading,login,logout}}>{children}</AuthContext.Provider>}
