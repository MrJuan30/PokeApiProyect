import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const userName =  useSelector(state => state.UserName)
  if (userName) {
    return <Outlet />
  } else {
    return <Navigate to='/'/>
  }
}

export default ProtectedRoutes