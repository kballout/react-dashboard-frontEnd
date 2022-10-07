import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

function General() {
  const {id} = useParams()
  const {guilds, selectedGuild} = useSelector((state) => state.auth)
  // const [selectedGuild, setSelectedGuild] = useState(guilds.find(g => g.id === id))

  return (
    <div>
        <div className='mainDash'>
          <div>
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