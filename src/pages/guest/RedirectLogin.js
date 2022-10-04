import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { attemptLogin, login } from '../../redux/authReducer'
import {useNavigate} from 'react-router-dom'

function RedirectLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loginMessage} = useSelector((state) => state.auth)

    useEffect(() => {
      console.log('checking login status');
      if(loginMessage === 'login success'){
        console.log('logged in successfully');
        navigate('/')
      } else if(loginMessage === 'login failed'){
        console.log('login failed');
        navigate('/asdasf')
      } else if(loginMessage === 'pending login'){
        console.log('pending login');
      } 
    //   else if(loginMessage === 'logout success'){
    //     console.log('logout attempt redirect');
    //     if(window.location.href === 'http://localhost:3000/' || window.location.href === 'http://localhost:3000'){
    //         window.location.reload()
    //     }
    //     navigate('/', {replace: true})
    // }
    },[loginMessage, navigate])

    useEffect(() => {
      dispatch(attemptLogin())
      dispatch(login())
  },[])

  return (
    <div>
        <h1>
            Redirecting you...
        </h1>
    </div>
  )
}

export default RedirectLogin