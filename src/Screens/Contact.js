import React, {Component} from 'react';

import './Contact.css';

class Contact extends Component {
 
  render(){
    return (
        <>
      <div className="About">
        
          <p className='content'>
<h2 className='pp'>Contact Us</h2>
<p>Hours and Info</p>
<p>8:30am - 4:30pm, Mon to Fri</p>

<p>32 Macaulay St, Williamstown North VIC 3016</p>
<p>   </p>
<p> Phone: (03) 9399 8887</p>

<p>Email: info@a1prestige.com.au</p>
          </p>
        
      </div>
    
    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.460115757113!2d144.86143601590513!3d-37.849523143864545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6613738a3c6e1%3A0xa8d35b13f1692a7d!2s32%20Macaulay%20St%2C%20Williamstown%20North%20VIC%203016%2C%20Australia!5e0!3m2!1sen!2s!4v1611271635014!5m2!1sen!2s" ></iframe>
      </>
    );
  }
}

export default Contact;
