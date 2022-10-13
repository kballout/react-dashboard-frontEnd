import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../ApiCalls";
import { updateGuild } from "../../redux/authReducer";
import "../../styles/main.css";

function MainDashboard() {
  const { selectedGuild } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const initialize = async() => {
    try {
      setLoading(true)
      let res = await axiosInstance.post(`/dashboard/${selectedGuild.id}/initialize`)
      if(res.data.msg === 'success'){
        //update guild info
        dispatch(updateGuild({id: selectedGuild.id, guildSettings: res.data.guild, type: 'initiate'}))
      } else{
        console.log('Error initiating GuildMaster');
      }
      
    } catch (error) {
      console.log(error);
    }
    window.location.reload()
  }
  
  const terminate = async() => {
    setLoading(true)
    try {
      let res = await axiosInstance.post(`/dashboard/${selectedGuild.id}/terminate`)
      if(res.data.msg === 'success'){
        //update guild info
        dispatch(updateGuild({id: selectedGuild.id, type: 'terminate'}))
      } else{
        console.log('Error terminating GuildMaster');
      }
    } catch (error) {
      console.log(error);
    }
    window.location.reload()
  }

  return (
    <div>
        <section className="mainDash">
          {!selectedGuild ? (
            <div>
              <h1>Server Settings</h1>
              <p>
                Please choose a server from the left sidebar to change settings.
                You can also add GuildMaster to a new server with the plus
                button.
              </p>
            </div>
          ) : (
            <div>
              <h1>Server Settings</h1>
              <h2>{selectedGuild.name}</h2>
              <div className="initialized" style={{display: 'flex', justifyContent: 'space-around'}}>
                <div className="property">
                  <h5>Members</h5>
                  <h1>{selectedGuild.channels.length}</h1>
                </div>
                <div className="property">
                  <h5>Channels</h5>
                  <h1>{selectedGuild.memberCount}</h1>
                </div>
                <div className="property">
                  <h5>Roles</h5>
                  <h1>{selectedGuild.roles.length}</h1>
                </div>
              </div>
              <div className="initialized">
                {selectedGuild.exists === true ? (
                  <div>
                    <h5>Guild is initialized</h5>
                    <p>The terminate button will end the activity and delete all channels, roles, and commands associated with GuildMaster</p>
                    {loading ? <Spinner animation="border"/> : <Button onClick={() => terminate()} >Terminate</Button>}
                  </div>
                ) : (
                  <div>
                    <h5>Guild is not initialized</h5>
                    <p>The Initialize button will begin the activity and create all channels, roles, and commands associated with GuildMaster</p>
                    {loading ? <Spinner animation="border"/> : <Button onClick={() => initialize()} >Initialize</Button>}
                  </div>
                )}
            </div>
            </div>
          )}
        </section>
      </div>
  );
}

export default MainDashboard;
