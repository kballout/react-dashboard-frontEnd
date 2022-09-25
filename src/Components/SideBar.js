import React, { useState } from "react";
import {FaBars} from 'react-icons/fa'
import { useSelector } from "react-redux";
import {CSSTransition} from 'react-transition-group';
import './styles/componentStyles.css'


function SideBar() {
    const [show, setShow] = useState(false)
    const {guilds, authUser} = useSelector((state) => state.auth)
    
    return (
        <div className="mainBar">
           <nav className="sideBar">
                    <FaBars className="bars" size={32} onClick={() => setShow(!show)}/>
                    <img src={authUser.avatar} alt='ProfilePic' className="icon"></img>
                <hr className="line"></hr>
                <ul className="list">
                    {guilds.map((guild) =>
                        <li key={guild.id}>
                            <img className="guild" src={guild.icon} alt='guildIcon'></img>
                        </li>
                    )}
                </ul>
           </nav>
           {show ? (
            <CSSTransition
                in={show}
                unmountOnExit
                timeout={300}
                onEnter={() => setShow(true)}
                 onExited={() => setShow(false)}
            >
                <div className="barExtention">
                        <h2>
                            Settings
                        </h2>
                </div>
            </CSSTransition>
           ): <></>}
        </div>
    )
}

export default SideBar;
