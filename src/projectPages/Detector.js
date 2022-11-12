import React from 'react'
import "../style/ProjectPage.css";
import YoutubeEmbed from "../components/Youtube";

function Detector() {
    return (    
        <div className="container">
            <div className='title'>
                <h1>Why Not Detector</h1>
                <p>A random Sunday in 2020</p>
                <hr></hr>
            </div>
            <div className='intro'>
                <img className='intro_image'alt='Hand Gesture Robot' src={require('../Asset/WasteDetection.jpg').default}/>
                <div className='intro_text'>
                    <h2>Introduction:</h2>
                    <p>
                        Why-not Detector is pure Machine Vision based software to detect the tissue balls on your table. 
                        After seeing so many AI-based object detection solutions. I wonder how easy it is to build an object detection without AI. 
                        The Why-not Detector is purely made from C++ and OpenCV. Why do we need to detect the tissue ball? Why not
                    </p>
                </div> 
            </div>
            <div className='content'>
                <h2>Tools:</h2>
                <p><b>• Hardware:</b> PC and a webcam </p>
                <p><b>• Software:</b> C++, OpenCV </p>
            </div>
            <div className='content'>
                <h2>Demo:</h2>
            </div>
            <YoutubeEmbed embedId='GNG_NCut0RU' />
        </div>
    )
}

export default Detector
