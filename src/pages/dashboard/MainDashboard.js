import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams} from 'react-router-dom'
import '../../styles/main.css'

function MainDashboard({id}) {
  
  const {selectedGuild} = useSelector((state) => state.auth)

  

  
  return (
    <div>
        <div className='mainDash'>
          <section>
            {!selectedGuild ? (
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