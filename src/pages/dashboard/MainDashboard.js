import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useLocation} from 'react-router-dom'
import NavigationBar from '../../Components/NavigationBar'
import SideBar from '../../Components/SideBar'
import '../../styles/main.css'

function MainDashboard() {
  const location = useLocation()
  const {guilds, selectedGuild} = useSelector((state) => state.auth)
  const [guild, setGuild] = useState(selectedGuild)


  return (
    <div>
        <NavigationBar/>
        <div className='mainDash'>
          <div>
            <SideBar/>
          </div>
          <section>
            {location.pathname === '/dashboard' ? (
              <div>
                <h1>
                  Server Settings
                </h1>
                <p>
                  Please choose a server from the left sidebar to change settings. You can also add GuildMaster to a new server with the plus button.
                </p>
              </div>
            ): <div>
              <h1>Server Settings</h1>
              <h2>{selectedGuild.name}</h2>
            </div>}
          </section>
        </div>
    </div>
  )
}

export default MainDashboard