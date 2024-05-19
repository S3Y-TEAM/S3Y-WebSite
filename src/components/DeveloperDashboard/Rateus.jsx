import React from 'react';
import './Rateus.css';

const Rateus = () => {

  const renderSquare = (i) => {
    return (
      <button className="square">
        {i}
      </button>
    );
  };

  return (
    <div className='rateus'>
        <img src={require("../images/Online Review-cuate 1.png")}/>
        <p>Please take one minute to leave us your candid feedback so we can continue to Improve. Our team will read each and every response. Don't hold bac, we want to know what you really think. Thank you!</p>
        <h3>How likely are you to recommend S3Y platform to a friend ?</h3>
      <div className="rateing">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
        {renderSquare(10)}
      </div>
      <div className='desc'>
        <span>0:Not at All Likely</span>
        <span>10: extremly Likely</span>
      </div>
      <button className='send'>
        Send
      </button>
     

    </div>
  );
};

export default Rateus;
