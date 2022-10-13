import React from 'react'
import './styles/componentStyles.css'


function SettingCard({setting}) {
  return (
    <div>
        <h5>{setting.term}</h5>
        <p>{setting.description}</p>
        <hr></hr>
        
    </div>
  )
}

export default SettingCard