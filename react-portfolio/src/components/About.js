import React from "react";
const profile_pic = require('../images/profile_pic.jpg')

export default function About() {

    return (
        <div className="page">


            <div className="about">
                <h1>
                    About me
                </h1>
                <img src={profile_pic} className="profile-picture"></img>
                <p>
                    I am a computer engineering graduate from San Francisco State University. I love to code and I am currently learning about web development as a full stack developer. I am fluent in Python as well as being adept in C++ and Java. The computer languages that I am currently learning about are HTML, CSS, and Javascript.
                </p>
            </div>


        </div>
    )
}