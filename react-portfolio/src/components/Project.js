import React, {useState} from 'react';
import '../styles/styles.css'

const homrImage = require('../images/homr-home-page.JPG')
const legenesisImage = require('../images/legenesis_logo.JPG')
const teamGenImage = require('../images/teamprofilegenerator.JPG')
const weatherImg = require('../images/weatherdashboard.JPG')
const WorkdayImg = require('../images/workday-scheduler.JPG')

export default function Project (){


    return (
        <div className='page projects'>
            <div className='project' style={{background: `url(${homrImage})`}}>
                <div>
                    <a href='https://shwethareddy0.github.io/homr/'>
                        <h3>
                            Homr
                        </h3>
                    </a>
                    <a href='https://github.com/shwethareddy0/homr'>
                        <h4>
                            Github
                        </h4>
                    </a>
                </div>
                <p>
                    Group Project
                    <br></br>
                    Javascript, Chart.js, Bulma
                    <br></br>
                    APIs: TravelTime, Sportsdata.io, TicketMaster
                </p>
            </div>
            <div className='project' style={{background: `url(${legenesisImage})`}}>
                <div>
                    <a href='https://legenesis.herokuapp.com/'>
                        <h3>
                            LeGenesis
                        </h3>
                    </a>
                    <a href='https://github.com/Darxmarx/character-creator'>
                        <h4>
                            Github
                        </h4>
                    </a>
                </div>
                <p>
                    Group Project
                    <br></br>
                    Javascript, Cloudinary, SQL, Sequelize
                    <br></br>
                    Restful APIs, 
                </p>
            </div>
            <div className='project' style={{background: `url(${teamGenImage})`}}>
                <div>
                    <a>
                        <h3>
                            Team Profile Generator
                        </h3>
                    </a>
                    <a href='https://github.com/Dempleon/Team_Profile_Generator'>
                        <h4>
                            Github
                        </h4>
                    </a>
                </div>
                <p>
                    Assignment Project
                    <br></br>
                    Node.js
                    <br></br>
                    Jest
                </p>
            </div>
            <div className='project' style={{background: `url(${weatherImg})`}}>
                <div>
                    <a href='https://dempleon.github.io/weather_dashboard/'>
                        <h3>
                            Weather Dashboard
                        </h3>
                    </a>
                    <a href='https://github.com/Dempleon/weather_dashboard'>
                        <h4>
                            Github
                        </h4>
                    </a>
                </div>
                <p>
                    Assignment Project
                    <br></br>
                    Jquery, OpenWeather api
                </p>
            </div>
            <div className='project' style={{background: `url(${WorkdayImg})`}}>
                <div>
                    <a href='https://dempleon.github.io/work-day-scheduler/'>
                        <h3>
                            Workday Scheduler
                        </h3>
                    </a>
                    <a href='https://github.com/Dempleon/work-day-scheduler'>
                        <h4>
                            Github
                        </h4>
                    </a>
                </div>
                <p>
                    Assignment Project
                    <br></br>
                    BootStrap
                </p>
            </div>
            
        </div>
    )
   
}

