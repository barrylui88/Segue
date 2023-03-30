import React, { useState  } from 'react';
import ActivitiesForm from './ActivitiesForm';
import WorkingActivity from './workingActivity';
import './index.css'

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
                        <WorkingActivity/>
                    </div>
            }
        </div>
    )
}

export default Activities;
