import React, { useEffect, useState } from 'react'
import "../../styles/main.css";
import { useSelector } from 'react-redux'
import SettingCard from '../../Components/SettingCard';
import {generalSettings} from '../../data'
import {useForm} from 'react-hook-form'


function General() {
  const {selectedGuild} = useSelector((state) => state.auth)
  const [selectedTab, setSelectedTab] = useState('general')
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const [selectedGuild, setSelectedGuild] = useState(guilds.find(g => g.id === id))

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
          <section className='generalDash'>
            <div>
              <h1>General Settings</h1>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <nav className='tabsNav'>
                    <h4 className={selectedTab === 'general' ? 'activeTab' : 'tab'} onClick={() => setSelectedTab('general')} >General</h4>
                    <h4 className={selectedTab === 'schedule' ? 'activeTab' : 'tab'} onClick={() => setSelectedTab('schedule')}>Schedule</h4>
                    <h4 className={selectedTab === 'multipliers' ? 'activeTab' : 'tab'} onClick={() => setSelectedTab('multipliers')}>Multipliers</h4>
                </nav>
                <div className='settingsContent'>
                  {selectedTab === 'general' ? (
                    generalSettings.map((setting, index) => 
                    <div className='settingCard' key={index}>
                      <SettingCard setting={setting}/>
                      
                    </div>
                    )): <></>}
                </div>
              </div>
            </div>
          </section>
        </div>
  )
}

export default General