import React from 'react'
import NavigationBar from '../../Components/NavigationBar'
import '../../styles/main.css'

function Home() {
  return (
    <div>
        <NavigationBar/>
        <section className='firstSection'>
            <div className='image'></div>
            <div className='firstText'>
                <h1>Build an MMO styled server!</h1>
                <p className='text'>
                    Guildmaster will help turn your Discord server into an expansive MMO with all sorts of configurable features including Levels/XP, Points, Stores, Teams, and much more.
                </p>   
            </div>
        </section>
    </div>
  )
}

export default Home