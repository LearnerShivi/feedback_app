import { useState } from "react";

import './Feedback.css';
import Review from './Review';

const FeedbackForm = () =>{
    const [initialFeedback, setInitialFeedback] = useState('');
    const [initialName,setInitialName] = useState('');
    function feedbackChangeHandler(event){
        setInitialFeedback(event.target.value);
        //console.log(initialFeedback);
    }
    function nameChangeHandler(event){
        setInitialName(event.target.value);
    }
    return (
        <div>
            <section id='feedback'>
            <h2>Feedback form</h2>
            <p>
                <label>Feedback</label>
                <textarea value={initialFeedback} onChange={feedbackChangeHandler}/>
            </p>
            <p>
                <label>Your Name</label>
                <input type='text' value={initialName} onChange={nameChangeHandler}/>
            </p>
            </section>
            <section id='draft'>
                <h2>Your feedback</h2>
                <Review feedback={initialFeedback} feedbackName={initialName}/>
                <p><button>save</button></p>
            </section>
        </div>
    );
}

export default FeedbackForm;