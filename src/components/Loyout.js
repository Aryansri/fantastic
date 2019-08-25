 import React, { Component } from 'react'
 
 import './Loyout.css'
import SlideBar from './SlideBar';
 export default class Loyout extends Component {
   render() {
     return (
       <div className="container">
       <div  className="bg1">
         <div className="col-1 ml-1 h-md-50 position-absolute text-danger text-center bg font_color p-1  vbar">

         <img src={process.env.PUBLIC_URL+"/layer5.png"}/>
           <img src={process.env.PUBLIC_URL+"/hot.png"}/>
         <p id="number">1</p>
                        <p id="number">2</p>
                        <p id="number">3</p>
                        <p id="number">4</p>
                        <p id="number">5</p>
                        <p id="number">6</p>
         </div>
         
       </div>


<SlideBar/>

       </div>
     )
   }
 }
 


 
