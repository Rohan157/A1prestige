import React from 'react';
import './card.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Rating from './Rating';

const Card=({monster})=>
(
  
    <Link to= {`/wreck/${monster.id}`} >
  
    <div className='cover'>
        <div className='cardq'>
            <img className='cardi' alt='monster' src={`images/${monster.id}.png` }/>
<div className = 'content'>
             <h4>       
                  TITLE: {monster.title}
             </h4>        
            <h5 className='mm'>
                 Type: {monster.type}
            </h5>
            

            <Rating
            value={monster.rating} 
               
            text={` _ ${monster.numReviews} reviews`}
          />
          
  </div>
        </div>
        </div>
  
    </Link>

)
export default Card;