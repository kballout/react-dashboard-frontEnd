import {BiLogIn, BiLogOut} from 'react-icons/bi'
import {GoDashboard} from 'react-icons/go'
import Button from 'react-bootstrap/Button';
import './styles/componentStyles.css'
import { useSelector } from 'react-redux/es/exports';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavigationBar = () => {
    const {loggedIn, authUser} = useSelector((state) => state.auth)
    
    const logout = () => {
        
    }

    return(
        <div>
            <nav className='navStyle'>
                    <a className='link' href='/'>
                        <div className='image'></div>
                        <h2 style={{marginTop: 20}}>GuildMaster</h2>
                    </a>
                    <div className='subNav'>
                        <a className='sublinks' href='/features'>
                            <h3>Features</h3>
                        </a>
                        <a className='sublinks' href='/tutorial'>
                            <h3>Tutorial</h3>
                        </a>
                        <div className='sublinks'>
                            {loggedIn ? (
                                <DropdownButton variant='light' id="dropdown-basic-button" title={`Welcome ${authUser.name}`} size='lg'>
                                    <Dropdown.Item className='dropDown' href="/dashboard"><GoDashboard style={{marginRight: 5}}/> Dashboard</Dropdown.Item>
                                    <Dropdown.Item className='dropDown' onClick={() => logout}><BiLogOut style={{marginRight: 5}}/> Logout</Dropdown.Item>
                                </DropdownButton>
                            ) : (
                                <Button variant="light" size='lg'>Login<BiLogIn/></Button>
                            )}
                        </div>
                    </div>
            </nav>
        </div>
    )
}


export default NavigationBar