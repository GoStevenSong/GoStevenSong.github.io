import React from 'react'
import "../style/ProjectPage.css";


function RentalTinder() {
    return (    
        <div className="container">
            <div className='title'>
                <h1>Rental Tinder</h1>
                <p>2018 Sep - 2018 Dec</p>
                <hr></hr>
            </div>
            <img className='intro_image'alt='Hand Gesture Robot' src={require('../Asset/RentalTinder.jpg').default}/>
            <div className='intro'>
                <div className='intro_text'>
                    <h2>Introduction:</h2>
                    <p>Rental Tinder is a Android&ios cross-platform mobile app. It provides a safe and entertaining way to build connection bewtween landlords and tenants.
                        The app allows user to register as landlords or tenants. By choosing differnet roles, users can upload thier unit pictures or living habbits. Swipe left and right.
                        Reserve a house tour if you are matched!   
                    </p>
                </div> 
            </div>
            <div className='content'>
                <h2>Features:</h2>
                <p>• Android ios Cross platform<br/>
                • Searching by location and sorting by living habbits.<br/>
                • Create customized tage for your profile.<br/>
                • Initialize chat channel when two profiles matched.</p>
            </div>
            <div className='content'>
                <h2>Stack:</h2>
                <p><b>• ReactNative</b><br/>
                   <b>• Node.js</b><br/>
                   <b>• MangoDB</b><br/>
                </p>
            </div>
        </div>
    )
}

export default RentalTinder
