import React from 'react';
import { useState } from 'react';
import './AddProblem.css';
import { useNavigate } from 'react-router-dom';

const AddProblem = () => {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (buttonType) => {
      setSelected(buttonType);
      if (buttonType === 'Developer'||buttonType === 'Worker') {
        navigate('/UserHome/PublishTask'); 
      } 
    };
  return (
    <div className='addproblem'>
        <button className='backbutton'>
            Back
        </button>
        <h3>Choose.. Which one will help you with your problem ?</h3>
        <div className='chooseDW'>
            <div className='dev'>
            <img src={require("../images/tech.png")}/>
            <div className='dev2'>
            <button className={selected === 'Developer' ? 'selected' : ''} 
              onClick={() => handleButtonClick('Developer')}>
                Develper
            </button>
            </div>
            </div>
            <div className='worker'>
            <img src={require("../images/worker 2.png")}/>
            <div className='worker2'>
            <button 
            className={selected === 'Worker' ? 'selected' : ''} 
            onClick={() => handleButtonClick('Worker')}>
                Worker
            </button>
            </div>
            </div>
        </div>
       
      

    </div>
  );
};

export default AddProblem;
