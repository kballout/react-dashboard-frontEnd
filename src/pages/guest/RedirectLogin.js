import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { changeLoginMessage, login } from '../../redux/authReducer'
import {useNavigate} from 'react-router-dom'

function RedirectLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loginMessage} = useSelector((state) => state.auth)

    useEffect(() => {
      console.log('checking login status. Value of loginMessage: ' + loginMessage);
      if(loginMessage === 'login success'){
        console.log('logged in successfully');
        // navigate('/')
      } else if(loginMessage === 'login failed'){
        console.log('failed');
        navigate('/asdasf')
      } else if(loginMessage === 'pending login'){
        console.log('pending');
      }
    },[loginMessage])

    useEffect(() => {
      dispatch(changeLoginMessage('pending login'))
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