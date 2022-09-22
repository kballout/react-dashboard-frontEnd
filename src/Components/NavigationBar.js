import {BiLogIn} from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import './styles/componentStyles.css'

const NavigationBar = () => {
    return(
        <div>
            <nav className='navStyle'>
                    <a className='link' href='/'>
                        <div className='image'></div>
                        <h3>GuildMaster</h3>
                    </a>
                    <div className='subNav'>
                        <a className='sublinks' href='/features'>
                            <h5>Features</h5>
                        </a>
                        <a className='sublinks' href='/tutorial'>
                            <h5>Tutorial</h5>
                        </a>
                        <a className='sublinks' href='/'>
                            <Button variant="light" size='lg'>Login<BiLogIn/></Button>
                        </a>
                    </div>
            </nav>
        </div>
    )
}


export default NavigationBar