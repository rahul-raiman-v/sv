import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { routes } from '..'
import { HomePage, LoginPage, SignUpPage } from '../../ui'
import { userAuthStore } from '../../store'
import { ProtectedRoute } from '../protectedRoute'
import { PublicRoute } from '../publicRoute'

export const AppRouter = () => {
  const { user,checkAuth } = userAuthStore();
  React.useEffect(()=>{
    checkAuth();    
  },[checkAuth])
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={
          <PublicRoute user={user}>
            <LoginPage/> 
          </PublicRoute>
          }/>
        <Route path={routes.signUp} element={
          <PublicRoute user={user}>
            <SignUpPage/>
          </PublicRoute>
          }/>
        <Route path={routes.home} element={
          <ProtectedRoute user={user}>
            <HomePage/>
          </ProtectedRoute>
        }/>

      </Routes>
    </BrowserRouter>
  )
}

