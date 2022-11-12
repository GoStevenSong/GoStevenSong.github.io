import React from 'react'
import "../style/Home.css";


function Home() {
    return (
        <div className="Home">
            <a href="/Steven_Song_Resume.pdf" className="btn10" download>
                <span>Download Resume</span>
                <div className="transition"></div>
            </a>
        </div>
    )
}

export default Home
