import {BiLogIn, BiLogOut} from 'react-icons/bi'
import {GoDashboard} from 'react-icons/go'
import Button from 'react-bootstrap/Button';
import './styles/componentStyles.css'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const {loggedIn, authUser} = useSelector((state) => state.auth)
    const logout = async() => {
        
    }

    const attemptLogin = async() => {
        console.log('try login');
        const baseUrl = 'http://localhost:3001'
        const res = await axios.get(`${baseUrl}/auth/login`)
        window.location.href = res.data.redirect
    }

    return(
        <div>
            <nav className='navStyle'>
                    <Link className='link' to='/'>
                        <div className='image'></div>
                        <h2 style={{marginTop: 20}}>GuildMaster</h2>
                    </Link>
                    <div className='subNav'>
                        <Link className='sublinks' to='/features'>
                            <h3>Features</h3>
                        </Link>
                        <Link className='sublinks' to='/tutorial'>
                            <h3>Tutorial</h3>
                        </Link>
                        <div className='sublinks'>
                            {loggedIn ? (
                                <DropdownButton variant='light' id="dropdown-basic-button" title={`Welcome ${authUser.username}`} size='lg'>
                                    <Dropdown.Item className='dropDown' href="/dashboard"><GoDashboard style={{marginRight: 5}}/> Dashboard</Dropdown.Item>
                                    <Dropdown.Item className='dropDown' onClick={() => logout}><BiLogOut style={{marginRight: 5}}/> Logout</Dropdown.Item>
                                </DropdownButton>
                            ) : (
                                <Button variant="light" size='lg' onClick={() => attemptLogin()}>Login<BiLogIn/></Button>
                            )}
                        </div>
                    </div>
            </nav>
        </div>
    )
}


export default NavigationBar