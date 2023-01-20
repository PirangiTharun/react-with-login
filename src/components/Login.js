import React from 'react'
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';
const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();
  return (
    <div className='loginDiv'>
      {
        isAuthenticated?
        <button className='button-28' onClick={()=>logout()}>Log out</button>:
        <button className='button-28' onClick={()=>loginWithRedirect()}>Login</button>
      }
        
        <h3>{isLoading && 'Loading...'}</h3>
    </div>
  )
}

export default Login