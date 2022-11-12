import React from 'react'
import "../style/ProjectPage.css";
import YoutubeEmbed from "../components/Youtube";

function HandGestureRobot() {
    return (    
        <div className="container">
            <div className='title'>
                <h1>Hand Gesture Controlled Robot Pet</h1>
                <p>2020 Sep - 2021 April</p>
                <hr></hr>
            </div>
            <div className='intro'>
                <img className='intro_image'alt='Hand Gesture Robot' src={require('../Asset/HandRobot.jpg').default}/>
                <div className='intro_text'>
                    <h2>Introduction:</h2>
                    <p>In this Capstone Project, we are working with Huawei Technologies Co., Ltd. to develop
                        a hand gesture-controlled robot pet. The robot pet will be capable of responding to hand
                        gestures and performing assistive tasks, such as taking a picture or video, as well as
                        entertaining pet tasks, such as “come here” or “spin around.”</p>
                </div> 
            </div>
            <div className='content'>
                <h2>Features:</h2>
                <p>• Respond to Hand gestures to do Certian task, including: Move Forward, Move Backwards, Spin Around, Take a Picture<br/>
                • Robot eyes keep following the person who is controlling.<br/>
                • Express robot's mood. Happy if it recognize the command, Sad face when it has low battery <br/>
                • When takeing picture for users, the robot will automaticly adjust the camera angle to make sure users are in center of the picture.</p>
            </div>
            <div className='content'>
                <h2>Tools:</h2>
                <p><b>• Hardware:</b> Atlas200DK, RaspberryPi, RaspberryPi Camera, RC carbase, LCD Display, Servo Motors, Power Bank</p>
                <p><b>• Machine Learning:</b> Hand Gesture Recognition, Hand Detection , Face Detection</p>
            </div>
            <div className='content'>
                <h2>Links:</h2>
                <p>• This Break words only at allowed break points. This is default Break words only at allowed break points.<br/>
                • Break words only at allowed break points. This is default.<br/>
                • Break wos is default Break words only at allowed break points. This is default.<br/>
                • This Break words only at allowed break points. This is default Break words only at allowed break points.</p>
            </div>
            <YoutubeEmbed embedId='43Dv9Wo_yBw' />
        </div>
    )
}

export default HandGestureRobot
