import React, { useState, useRef, } from 'react'
//  import ReactDOM from 'react-dom/client';
//  import Countdown from 'react-countdown';
//import ActivitiesForm from './activities/ActivitiesForm';
//import SkipButton from './button'

const Timer = () => {

	const Ref = useRef(null);
	const [timer, setTimer] = useState('00:00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total > 0) {

			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
        }     
        else if (total === 0) {
            setTimer(
				(hours = '00') + ':' +
				(minutes = '00') + ':'
				+ (seconds = '0' + 0)
			)   
			console.log("You can go");
           
				 
        }
    }
        
    
    

	const clearTimer = (e) => {
	
		startTimer(e);

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = (min) => {
		let deadline = new Date();

		
		deadline.setSeconds(deadline.getSeconds() + min*60);
            return deadline;
	}

	const onClickReset5 = () => {
		clearTimer(getDeadTime(5));
	}

	const onClickReset3 = () => {
		clearTimer(getDeadTime(3));
	}

	const onClickReset1 = () => {
		clearTimer(getDeadTime(0.5));
	}

	

	const onClickReset = () => {
		clearTimer(getDeadTime(0));

	}

	
	

	

	return (
		<div className="box timer-module">
            <div className="container">
        	    <h1 class ="align-middle">{timer}</h1>
			    
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" id="button1" onClick={onClickReset5}>5 min</button>
                    <button type="button" className="btn btn-primary" id="button2" onClick={onClickReset3}>3 min</button>
                    <button type="button" className="btn btn-primary" id="button3" onClick={onClickReset1}>0.5 min</button>
					<button type="button" className="btn btn-primary" id="button3" onClick={onClickReset}>Skip</button>
					
					
			
				</div>
            </div>
        </div>
	)
}

export default Timer;
