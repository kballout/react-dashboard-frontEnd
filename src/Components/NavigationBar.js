import '../styles/navbar.css'
import {BiLogIn} from 'react-icons/bi'
import Button from 'react-bootstrap/Button';

const NavigationBar = () => {
    return(
        <div>
            <header className='navStyle'>
                    <a className='link' href='/'>
                        <div className='image'></div>
                        <h3>GuildMaster</h3>
                    </a>
                    <div className='subNav'>
                        <a className='sublinks' href='/'>
                            <h5>Features</h5>
                        </a>
                        <a className='sublinks' href='/'>
                            <h5>Tutorial</h5>
                        </a>
                        <a className='sublinks' href='/'>
                            <Button variant="light" size='lg'>Login<BiLogIn/></Button>
                        </a>
                    </div>
            </header>
        </div>
    )
}


export default NavigationBar