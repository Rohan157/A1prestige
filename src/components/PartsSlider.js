import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PartsSlider.scss'
import { Link } from 'react-router-dom';

const PartsSlider =(props)=> {
    let settings = {
        adaptiveheight: true,
        
        dots: true,
        autoplay: true,
        draggable: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
      
        <Slider {...settings}>
         
                    <div className="card-wrapper"><div className="card">
                        <div className="card-image">
                        <img src={"images/parts/1.png"} /></div>
                        <div className="details">
                       
                    </div></div></div>
           
                  
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/2.png"} /></div><div className="details">
                   
                    </div></div></div>
                   
                   
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/3.png"} /></div><div className="details">
                 
                    </div></div></div>
                  
                  
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/4.png"} /></div><div className="details">
                 
                    </div></div></div>
               
                   
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/5.png"} /></div><div className="details">
                       
                    </div></div></div>
              
                 
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/6.png"} /></div><div className="details">
                       
                    </div></div></div>
         
                   
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/7.png"} /></div><div className="details">
                      
                    </div></div></div>
          
                  
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/8.png"} /></div><div className="details">
                     
                    </div></div></div>
             
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/9.png"} /></div><div className="details">
                       
                    </div></div></div>
                
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/parts/10.png"} /></div><div className="details">

                        </div></div></div>
                    
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                    <img src={"images/parts/11.png"} /></div><div className="details">
                      
                   </div></div></div>
               
           
        </Slider>
     
    )
}

export default PartsSlider