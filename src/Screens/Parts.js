import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PartsSlider from '../components/PartsSlider';
import PartsSlider2 from '../components/PartsSlider2';
import './Parts.css'

class Parts extends Component {
    
    render() { 
        return ( 
            <div className='parts'>
                <h3>
                Visit or call our warehouse for a range of spare parts. We sell good quality spares at very affordable prices. 
                <br/>
                To speak to one of our spares specialist, please call the number given on our website.
                <br/>
                For Contact info Please our <Link className='link' to='/contact'>Contact Us </Link>Section
                </h3>
                <PartsSlider/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <PartsSlider2/>

            </div>



         );
    }
}
 
export default Parts;