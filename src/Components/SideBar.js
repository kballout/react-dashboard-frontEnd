import React, { useState } from "react";
import {FaBars, FaPlusCircle} from 'react-icons/fa'
import { useSelector } from "react-redux";
import './styles/componentStyles.css'


function SideBar() {
    const [show, setShow] = useState(false)
    const {guilds, authUser} = useSelector((state) => state.auth)
    
    return (
        <div className="mainBar">
           <nav className="sideBar">
                    <div style={{display: "flex", alignItems: 'center', gap: 5}}>
                        <img src={authUser.avatar} alt='ProfilePic' className="icon"></img>
                        <FaBars className="clickable" size={32} onClick={() => setShow(!show)}/>
                    </div>
                <hr className="line"></hr>
                <ul className="list">
                    {guilds.map((guild) =>
                        <li key={guild.id}>
                            <img className="guild" src={guild.icon} alt='guildIcon'></img>
                        </li>
                    )}
                </ul>
                <hr className="line"></hr>
                <FaPlusCircle className="clickable" size={32}/>        
           </nav>
            <div className="barExtention" style={{width: show ? 300 : 0}}>
                {show ? (
                        <h2>
                            Settings
                        </h2>
                ): <></>}
            </div>
        </div>
    )
}

export default SideBar;
