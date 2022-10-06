import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import NavigationBar from '../../Components/NavigationBar'
import SideBar from '../../Components/SideBar'

function General() {
  const location = useLocation()
  const {selectedGuild} = useSelector((state) => state.auth)

  return (
    <div>
        <NavigationBar/>
        <div className='mainDash'>
          <div>
            <SideBar/>
          </div>
          <section>
              <h1>General Settings</h1>
              <h2>{selectedGuild.name}</h2>
          </section>
        </div>
    </div>
  )
}

export default General