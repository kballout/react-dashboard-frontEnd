import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Routes, Route, Navigate, useNavigate, useLocation, useParams} from 'react-router-dom';
import { checkCredentials } from './credentials';
import MainDashboard from './pages/dashboard/MainDashboard';
import Error from './pages/Error';
import Features from './pages/guest/Features';
import Home from './pages/guest/Home';
import { changeUserStatus, selectGuild } from './redux/authReducer';
import RedirectLogin from './pages/guest/RedirectLogin';
import Unauthorized from './pages/Unauthorized';
import General from './pages/dashboard/General';
import Moderation from './pages/dashboard/General';
import TeamManagement from './pages/dashboard/TeamManagement';
import Programs from './pages/dashboard/Programs';
import Stores from './pages/dashboard/Stores';
import Emblems from './pages/dashboard/Emblems';
import Leaderboards from './pages/Leaderboards';
import NavigationBar from './Components/NavigationBar';
import SideBar from './Components/SideBar';

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
    console.log('check status use effect. Value of logged in: ' + loggedIn);
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
    <>
      <NavigationBar/>
      {loggedIn === true ?  <AuthNavigation/> : <GuestNavigation/>}
    </>
  )
}

export const GuestNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if(location.pathname !== '/dashboard'){
      navigate('/')
    }
  },[])
  return(
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route path='/auth/:authcode' element={<RedirectLogin/>}> </Route>
      <Route path='/features' element={<Features/>}> </Route>
      <Route path='/dashboard' element={<Unauthorized/>}> </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
  )
}

export const AuthNavigation = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const {guilds} = useSelector((state) => state.auth)

  useEffect(() => {
    let id = location.pathname.split('/')[2]
    dispatch(selectGuild(guilds.find(g => g.id === id)))
    
  },[location])

  return(
    <>
      {location.pathname.includes('/dashboard') ? <SideBar/> : <></>}
      <Routes>
        <Route exact path='/dashboard' element={<MainDashboard/>}> </Route>
        <Route exact path='/dashboard/:id' element={<MainDashboard/>}> </Route>
        <Route exact path='/dashboard/:id/general' element={<General/>}> </Route>
        <Route exact path='/dashboard/:id/moderation' element={<Moderation/>}> </Route>
        <Route exact path='/dashboard/:id/management' element={<TeamManagement/>}> </Route>
        <Route exact path='/dashboard/:id/stores' element={<Stores/>}> </Route>
        <Route exact path='/dashboard/:id/programs' element={<Programs/>}> </Route>
        <Route exact path='/dashboard/:id/emblems' element={<Emblems/>}> </Route>

        <Route path='/auth/:authcode' element={<Navigate to={'/'} replace={true}/>}> </Route>
        <Route exact path='/' element={<Home/>}> </Route>
        <Route path='/features' element={<Features/>}> </Route>
        <Route path=':id/stats' element={<Leaderboards/>}> </Route>
        
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </>
  )
}

