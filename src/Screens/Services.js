import React, { Component } from 'react';
import './Services.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Services extends Component {
    
    render() { 
        return ( 
            <div className='ccc'>
            <h2>We service a wide range of BMW vehicles and models using good quality parts. </h2>
            <h2>    If you are interested in a car service, 
                please call or email us on the info given on <Link className='link' to='/contact'>Contact Us </Link>Page.

            </h2>

            <div id="pot">
            <img src="./images/bmw.png" ></img>
          </div>
          </div>
         );
    }
}
 
export default Services;