import React, { useState } from 'react';
import ActivitiesForm from './ActivitiesForm';
import './index.css'

var saved = JSON.parse(window.localStorage.getItem("formInput"))

function Activities() {

    const [showElement2, setShowElement2] = useState(false);
    const [buttonText, setButtonText] = useState('Start');

    const startActivity = () => {
        setShowElement2(!showElement2);
        if (buttonText === 'Start') {
            setButtonText('Back');
        } else {
            setButtonText('Start');
        }
    };
    
    
    return (
        <div className="container text-center">
            {!showElement2 && 
                <div id="element1" className="default-view" >
                    <h1>Please Enter Your Activities Today</h1>
                    <ActivitiesForm />
                </div>
            }
            
            <button className='btn btn-primary start-button' onClick={startActivity}>{buttonText}</button>            
            
            {showElement2 && 
                <div id="element2">
                    <h1>{saved[0]}</h1>
                </div>
            }
        </div>
    )
}

export default Activities;