import React, { Component } from 'react';
import CardItem from '../components/CardItem';
import "../style/Project.css";


export class Project extends Component {
    render() {
        return (
            <div className='cards'>
              <h1>More to Come!</h1>
              <div className='cards__container'>
                <div className='cards__wrapper'>
                  <ul className='cards__items'>
                    <CardItem
                      src={require('../Asset/HandRobot.jpg').default}
                      text='Hand Gesture Controlled Robot Pet'
                      label='UBC APSC Awards'
                      path='/projects/hand-gesture-robot'
                    />
                    <CardItem
                      src={require('../Asset/QubicPic.jpg').default}
                      text='Qubic'
                      label='A+ Project'
                      path='/projects/qubic'
                    />
                  </ul>
                  <ul className='cards__items'>
                    <CardItem
                      src={require('../Asset/WasteDetection.jpg').default}
                      text='Why Not Detector'
                      label='Just for fun'
                      path='/projects/why-not-detecotr'
                    />
                    <CardItem
                      src={require('../Asset/RentalTinder.jpg').default}
                      text='Rental Tinder'
                      label='Full stack APP'
                      path='/projects/rental-tinder'
                    />
                    <CardItem
                      src={require('../Asset/ComingSoon.jpg').default}
                      text=''
                      label=''
                      path='/sign-up'
                    />
                    
                  </ul>
                </div>
              </div>
            </div>
          );
    }
}

export default Project
