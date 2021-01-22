import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PartsSlider.scss'
import { Link } from 'react-router-dom';

const PartsSlider2 =(props)=> {
    let settings = {
        adaptiveheight: true,
        
        dots: true,
        autoplay: true,
        draggable: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 9,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (  
        <Slider {...settings}>
         
                    <div className="card-wrapper"><div className="card">
                        <div className="card-image">
                        <img src={"images/parts/12.png"} /></div>
                        <div className="details">
                       
                    </div></div></div>
           
                  
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/13.png"} /></div><div className="details">
                   
                    </div></div></div>
                   
                   
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/14.png"} /></div><div className="details">
                 
                    </div></div></div>
                  
                  
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/15.png"} /></div><div className="details">
                 
                    </div></div></div>
               
                   
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/16.png"} /></div><div className="details">
                       
                    </div></div></div>
              
                 
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/17.png"} /></div><div className="details">
                       
                    </div></div></div>
         
                   
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/18.png"} /></div><div className="details">
                      
                    </div></div></div>
          
                  
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/19.png"} /></div><div className="details">
                     
                    </div></div></div>
             
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/20.png"} /></div><div className="details">
                       
                    </div></div></div>
                
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/21.png"} /></div><div className="details">

                        </div></div></div>
                    
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                    <img src={"images/parts/22.png"} /></div><div className="details">
                      
                   </div></div></div>
               
                   
        </Slider>
        
    )
}

export default PartsSlider2