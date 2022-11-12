import React from 'react'
import "../style/ProjectPage.css";
import YoutubeEmbed from "../components/Youtube";

function Qubic() {
    return (    
        <div className="container">
            <div className='title'>
                <h1>Qubic</h1>
                <p>2019 Jan - 2019 April</p>
                <hr></hr>
            </div>
            <div className='intro'>
                <img className='intro_image'alt='Hand Gesture Robot' src={require('../Asset/QubicPic.jpg').default}/>
                <div className='intro_text'>
                    <h2>Introduction:</h2>
                    <p>Qubic is an Open Source, Extendable design for a tech/learning toy. It is built with Microservice Architecture and has the ablity to bundle code remotyly
                        and swap live bundles on-the-fly. It has several fun in-built apps including: Snack Game, Snow Globe and Tag game.  
                    </p>
                </div> 
            </div>
            <div className='content'>
                <h2>Features:</h2>
                <p>
                • The ability to bundle code remotely and swap live bundles on-the-fly.<br/>
                • Many well-documented libraries for driving Qubic resources in React-Native.<br/>
                • A platform for users to build and upload third-party applications.<br/>
                • Sample applications which prove maximum user flexibility for third-party apps.
                </p>
            </div>
            <div className='content'>
                <h2>Tools:</h2>
                <p><b>• Hardware:</b> De1-Soc, Bluetooth, leds, D-pad, Jump wires, </p>
                <p><b>• Software:</b> Microservice, Docker, Kubernetes, React-Native </p>
            </div>
            <div className='content'>
                <h2>System Diagram:</h2>
                <div className='img_container'>
                    <img alt='Qubic System Diagram' src={require('../Asset/QubicSystemDiagram.jpg').default}/>
                </div> 
            </div>
            <div className='content'>
                <h2>Demo:</h2>
            </div>
            <YoutubeEmbed embedId='a6sPQwr2v3I' />
        </div>
    )
}

export default Qubic
