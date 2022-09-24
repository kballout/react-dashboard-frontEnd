import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch, Provider} from 'react-redux'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Store } from './redux/store';
import { checkCredentials } from './credentials';
import MainDashboard from './pages/dashboard/MainDashboard';
import Error from './pages/Error';
import Features from './pages/guest/Features';
import Home from './pages/guest/Home';
import { changeUserStatus } from './redux/authReducer';

export default function App() {
  return (
    <Provider store={Store} >
      <RootNavigation/>
    </Provider>
  )
}

export const RootNavigation = () => {
  const [loading, setLoading] = useState(true)
  const {loggedIn} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  //check logged in status
  const checkStatus = async() => {
    const {authUser, guilds, accessToken, refreshToken} = await checkCredentials()
    if(authUser){
      dispatch(changeUserStatus({authUser, guilds, accessToken, refreshToken}))
    }
    setLoading(false)
  }

  useEffect(() => {
    checkStatus()
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
    <BrowserRouter>
      {loggedIn === true ? <AuthNavigation/> : <GuestNavigation/>}
    </BrowserRouter>
  )
}

export const GuestNavigation = () => {
  return(
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route path='/features' element={<Features/>}> </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
  )
}

export const AuthNavigation = () => {
  return(
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route exact path='/dashboard' element={<MainDashboard/>}> </Route>
      <Route path='/features' element={<Features/>}> </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
  )
}

