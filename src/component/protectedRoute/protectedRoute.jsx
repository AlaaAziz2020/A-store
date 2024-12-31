import React from 'react'
import { Navigate } from 'react-router'
import Login from '../Login/Login'
export default function ProtectedRoute(props) {
 
   if(localStorage.getItem('userToken') !==null){
return props.children
   }else{
   return <Navigate to={'/login'} />


   }
  
}
