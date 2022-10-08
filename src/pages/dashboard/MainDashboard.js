import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../../styles/main.css";

function MainDashboard({ id }) {
  const { selectedGuild } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="mainDash">
        <section>
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
              <div className="initialized">
                {selectedGuild.exists === true ? (
                  <div>
                    <h5>Guild is initialized</h5>
                    <p>The terminate button will end the activity and delete all channels, roles, and commands associated with GuildMaster</p>
                    <Button>Terminate</Button>
                  </div>
                ) : (
                  <div>
                    <h5>Guild is not initialized</h5>
                    <p>The Initialize button will begin the activity and create all channels, roles, and commands associated with GuildMaster</p>
                    <Button>Initialize</Button>
                  </div>
                )}
            </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default MainDashboard;
