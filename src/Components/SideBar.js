import React, { useEffect, useState } from "react";
import {FaBars, FaPlusCircle, FaLanguage, FaStore, FaClipboardList} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import {HiUserGroup} from 'react-icons/hi'
import {GiSwordsEmblem} from 'react-icons/gi'
import {ImStatsBars} from 'react-icons/im'
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './styles/componentStyles.css'


function SideBar({id}) {
    const [show, setShow] = useState(false)
    const {guilds, authUser, selectedGuild} = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const guildSelect = (guild) => {
        navigate(`/dashboard/${guild.id}`)
        setShow(true)
    }



    
    return (
        <div className="mainBar">
           <nav className="sideBar">
                    <div style={{display: "flex", alignItems: 'center', gap: 5}}>
                        <img src={`https://cdn.discordapp.com/avatars/${authUser.id}/${authUser.avatar}.png`} alt='ProfilePic' className="icon"></img>
                        <FaBars className="clickable" size={32} onClick={() => setShow(!show)}/>
                    </div>
                <hr className="line"></hr>
                <ul className="list">
                    {guilds.map((guild) =>
                        <li key={guild.id}>
                            <img className= {selectedGuild && selectedGuild.id === guild.id ? "activeGuild" : "guild"} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name} onClick={() => guildSelect(guild)}></img>
                        </li>
                    )}
                </ul>
                <hr className="line"></hr>
                <FaPlusCircle className="clickable" size={32}/>        
           </nav>
            <div className="barExtention" style={{width: show ? 300 : 0}}>
                {show ? (
                        <div>
                            {!selectedGuild ? <p>No guild has been selected yet to change settings</p> : (
                                <div className="innerSidebar">
                                    <img src={`https://cdn.discordapp.com/icons/${selectedGuild.id}/${selectedGuild.icon}.png`} alt={'guild icon'}></img>
                                    <h5>{selectedGuild.name}</h5>
                                    <nav>
                                        <div className="setting">
                                            <Link className="links" to={`/dashboard/${selectedGuild.id}/general`}>
                                                    <FiSettings size={20}/>
                                                    <h5>General</h5>
                                            </Link>
                                        </div>
                                        <div className="setting">
                                            <Link className="links" to={`/dashboard/${selectedGuild.id}/moderation`}>
                                                <FaLanguage size={20}/>
                                                <h5>Moderation</h5>
                                            </Link>
                                        </div>
                                        <div className="setting">
                                            <Link className="links" to={`/dashboard/${selectedGuild.id}/management`}>
                                                <HiUserGroup size={20}/>
                                                <h5>Team Management</h5>
                                            </Link>
                                        </div>
                                        <div className="setting">
                                            <Link className="links" to={`/dashboard/${selectedGuild.id}/stores`}>
                                                <FaStore size={20}/>
                                                <h5>Stores</h5>
                                            </Link>
                                        </div>
                                        <div className="setting">
                                            <Link className="links" to={`/dashboard/${selectedGuild.id}/programs`}>
                                                <FaClipboardList size={20}/>
                                                <h5>Programs</h5>
                                            </Link>
                                        </div>
                                        <div className="setting">
                                            <Link className="links" to={`/dashboard/${selectedGuild.id}/emblems`}>
                                                <GiSwordsEmblem size={20}/>
                                                <h5>Emblems</h5>
                                            </Link>
                                        </div>
                                        <div className="setting">
                                            <Link className="links" to={`/dashboard/${selectedGuild.id}/stats`}>
                                                <ImStatsBars size={20}/>
                                                <h5>Leaderboards</h5>
                                            </Link>
                                        </div>
                                        {/* <Outlet/> */}
                                    </nav>
                                </div>
                            )}
                        </div>
                ): <></>}
            </div>
        </div>
    )
}

export default SideBar;
