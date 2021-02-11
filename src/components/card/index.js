import React, { useState} from 'react';
import './style.scss';

const Card = ({ children }) => {
const [flipped, setFlipped] = useState(false);

  return (
  <div 
    className="flip-card"
    onClick={()=> {setFlipped(!flipped)}}
  >
    <div className={flipped ? "card-front card-front-rotate" : "card-front"}>
      Front!
    </div>
    <div className={flipped ? "card-back card-back-rotate" : "card-back"}>
     {children}
    </div>
  </div>
  );
}

export default Card;


