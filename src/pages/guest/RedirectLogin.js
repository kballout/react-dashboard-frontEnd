import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { login } from '../../redux/authReducer'
import {useNavigate} from 'react-router-dom'

function RedirectLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loggedIn} = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(login())
    },[])

    useEffect(() => {
      if(loggedIn === true){
        return (
          navigate('/dashboard')
        )
      }
    },[loggedIn, navigate])

  return (
    <div>
        <h1>
            Redirecting you...
        </h1>
    </div>
  )
}

export default RedirectLogin