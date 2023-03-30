import React, { useState  } from 'react';

function WorkingActivity() {
    var saved = JSON.parse(window.localStorage.getItem("formInput"));

    const [index, setIndex] = useState(1);
    const [title, setTitle] = useState(saved[0]);
    const [buttonText, setButtonText] = useState('Next');
    console.log(title);

    const skipButton = () => {
        setIndex((index + 1));
        setTitle(saved[index]);
        if (index > 3){
            setButtonText('The End')
        }
    };
    console.log(index);

    
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={skipButton}>{buttonText}</button>
            <h1>{title}</h1>
        </div>
    )
}

export default WorkingActivity;