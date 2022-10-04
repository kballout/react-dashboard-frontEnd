import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Routes, Route, Navigate} from 'react-router-dom';
import { checkCredentials } from './credentials';
import MainDashboard from './pages/dashboard/MainDashboard';
import Error from './pages/Error';
import Features from './pages/guest/Features';
import Home from './pages/guest/Home';
import { changeUserStatus } from './redux/authReducer';
import RedirectLogin from './pages/guest/RedirectLogin';
import Unauthorized from './pages/Unauthorized';

export default function App() {
  return (
      <RootNavigation/>
  )
}

export const RootNavigation = () => {
  const [loading, setLoading] = useState(true)
  const {loggedIn} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  //check logged in status
  const checkStatus = async() => {
    const {authUser, guilds} = await checkCredentials()
    if(authUser){
      dispatch(changeUserStatus({authUser, guilds}))
    }
    setLoading(false)
  }

  useEffect(() => {
    if(!loggedIn){
      checkStatus()
    }
  },[])

  if(loading){
    return(
      <div>
        <h2 style={{color: 'white'}}>
          Loading
        </h2>
      </div>
    )
  }

  return (
      loggedIn === true ?  <AuthNavigation/> : <GuestNavigation/>
  )
}

export const GuestNavigation = () => {
  return(
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route path='/auth/:authcode' element={<RedirectLogin/>}> </Route>
      <Route path='/features' element={<Features/>}> </Route>
      <Route path='/err' element={<Unauthorized/>}> </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
  )
}

export const AuthNavigation = () => {
  return(
    <Routes>
      <Route path='/dashboard' element={<MainDashboard/>}> </Route>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route path='/features' element={<Features/>}> </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
  )
}

