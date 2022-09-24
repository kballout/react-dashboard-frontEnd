import {BiLogIn} from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import './styles/componentStyles.css'

const NavigationBar = () => {
    return(
        <div>
            <nav className='navStyle'>
                    <a className='link' href='/'>
                        <div className='image'></div>
                        <h2>GuildMaster</h2>
                    </a>
                    <div className='subNav'>
                        <a className='sublinks' href='/features'>
                            <h3>Features</h3>
                        </a>
                        <a className='sublinks' href='/tutorial'>
                            <h3>Tutorial</h3>
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