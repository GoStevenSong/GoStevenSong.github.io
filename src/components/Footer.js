import React, { Component } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../style/Footer.css"
export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="link-container">
                    <a href="https://www.linkedin.com/in/steven-song-ubccpen/" target="_blank" rel="noreferrer noopener"><LinkedInIcon style={{ fontSize: 35 }} /></a>
                    <a href="https://github.com/songxincheng124" target="_blank" rel="noreferrer noopener"><GitHubIcon style={{ fontSize: 35 }} /></a>
                    <a href="https://www.instagram.com/songsteven1204/" target="_blank" rel="noreferrer noopener"><InstagramIcon style={{ fontSize: 35 }} /></a>
                    <a href="https://www.facebook.com/song.steven.961/" target="_blank" rel="noreferrer noopener"><FacebookIcon style={{ fontSize: 35 }}/></a>
                </div>
                <div className="text-container">
                    <p>All rights reserved © 2021 Steven Song</p>
                    <p>Build with React</p>
                </div>
            </div>
        )
    }
}

export default Footer
