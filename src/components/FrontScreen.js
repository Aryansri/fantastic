


import React, { Component } from 'react'
import './FrontScreen.css';
import SlideBar from './SlideBar'
import Loyout from './Loyout'


 class FrontScreen extends Component {



  constructor(props) {
    super(props)
  
    this.state = {
      handlerclick1:false,
      handlerclick:false,
      value:0
      
  
       
    }

    this.handlerclick=this.handlerclick.bind();
    this.handlerclick1=this.handlerclick.bind();

  }
  

   handlerclick=()=>{
     console.log('hello');
     const{handlerclick}= this.state;
 this.setState({
 handlerclick:!handlerclick
 })
     
   }



   handlerclick1=()=>{
      console.log('hello');
      const{handlerclick1}= this.state;
  this.setState({
  handlerclick1:!handlerclick1
  })
}

  //  handlerChangeValue = value => {
  //   this.setState(
  //     {
  //       value
  //     },
  //     () => {
  //       console.log(this.state.value);
  //     }
  //   );
  //   }

   handlerChangeValue=(event)=>{
     console.log('slide moving')
this.setState({
  value:event.target.value


})
   }

  render() {
    return (
      <div>




<div className="container">
    <div className="row">



   

    <div class="col-12">
           <div className="bg-color">
        

           </div>
            
            
            
            <div class="col-1 ml-1 h-md-50 position-absolute text-danger text-center bg font_color p-1">
               
                        
            <img src={process.env.PUBLIC_URL+"/layer5.png"}/>
           <img src={process.env.PUBLIC_URL+"/hot.png"}/>

                        <p id="number">1</p>
                        <p id="number">2</p>
                        <p id="number">3</p>
                        <p id="number">4</p>
                        <p id="number">5</p>
                        <p id="number">6</p>
                       
            </div>
            
            
           
       <div className="col-12">
           
            

                 <div className="col-12 h-25 position-relative d-flex">
                    
                    <div className="col-3">
                       <div id="chat_layer"></div>
                    </div>

                    <div className="col-6 d-flex justify-content-end">
                         <div className="col-3 d-lg-block"></div>
                        <div className="col-lg-9 col-md-10 d-flex p-0 pr-sm-3 pr-lg-5 pr-md-4 col-sm-9">
                       <div className="col-2 bar m-0 text-center" id="bar1">
                                  
                                <div><span className="bet_range" id="demo">{this.state.value}</span></div>
                                
                                  <div className="slidecontainer">
                              
                                    <input onChange={this.handlerChange.value1}  type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange"/>
                                   
                                </div>
                                
                             </div>
    
                            <div className="col-2 bar m-0" id="bar2">
                                <span className="bet_range" id="demo">0</span>
                                <div className="slidecontainer">
                                    <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/>
                                  
                                </div>
                            </div>
                            <div className="col-2 bar m-0" id="bar3">
                                <span className="bet_range" class="bet_range" id="demo">0</span>
                                <div className="slidecontainer">
                                    <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/>
                                    
                                </div>
                            </div>
                            <div className="col-2 bar m-0" id="bar4">
                                <span className="bet_range" id="demo">0</span>
                                <div className="slidecontainer">
                                    <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/>
                                </div>
                            </div>
                            <div className="col-2 bar m-0" id="bar5">
                                <span className="bet_range" id="demo">0</span>
                                <div className="slidecontainer">
                                    <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/>
                                </div>
                            </div>
                            <div className="col-2 bar m-0" id="bar6">
                            {/* {this.state.handlerclick?<h1>hello</h1>:null} */}
                                <span className="bet_range" id="demo">0</span>
                                <div className="slidecontainer">
                                    <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/>
                                </div>
                            </div>
                        </div>
                   
                  </div>

               
                </div>

                </div>










            <div className="col-12 position-relative text-center bg-dark">


              
              <div className="row">
                <div className="col-3 w-100 p-0">
                  <div className="col-12 border-right p-0">
                     <div className="input-group">
                      <input className="input-group-append w-100 bg text-black font_color" type="text" name="text" placeholder="CLICK TO CHAT"/><span><a href=""><i className="fa fa-paper-plane-o chat_send_button" aria-hidden="true"></i></a></span>
                     </div>
                  </div>
                  <div className="col-12 border-right">
                      <div className="row d-flex flex-nowrap">
                       
                        <div className="col bg m-1 p-0">
                          <p className="font_color text-center p-auto m-0">BALANCE</p>
                            <span id="balance"><small>10000</small></span>
                
                        </div>

                         <div className="col bg m-1 p-0">

                             <p className="font_color text-center p-auto m-0">TOTAL BET</p>
                            <span id="total-balance"><small>10000</small></span>
                          </div>
                      </div>
                  </div>
                </div>

                
                <div className="col-6 border-right p-sm-0 px-lg-2">
                    
                    <div className="col-12 d-lg-flex d-md-flex d-sm-flex d-xs-flex bg p-sm-0">
                        <div className="col-lg-3 col-md-2 col-sm-4 col-xs-4 p-0 w-100">
                            <p className="font_color my-2 text-wrap text-truncate">CLICK THE NUMBERS TO PLACE BET</p>
                     <img className="h-50 col-12 m-2 w-75" src="images/text.png" alt=""/> 
                        </div>
                       
                       
                        <div className="col-lg-9 col-md-10 col-sm-8 col-xs-7 p-0 btn-group">
                            <div className="col-lg-12 col-sm-12 p-0  d-flex btn-group">
                                <div  className="button_img btn p-0"   >
                               
                                    <img   onClick={this.handlerclick} src= {process.env.PUBLIC_URL+"/Group 1.png"} alt="" className="btn_img"/>
                                </div>
                                <div className="button_img btn p-0">
                                    <img    onClick={this.handlerclick1}src= {process.env.PUBLIC_URL+"/Group 2.png"} alt="" className="btn_img"/>
                                </div>
                                <div className="button_img btn p-0">
                                    <img  onClick={this.handlerclick2}  src= {process.env.PUBLIC_URL+"/Group 3.png"}alt="" className="btn_img"/>
                                </div>
                                <div className="button_img btn p-0">
                                    <img   onClick={this.handlerclick} src= {process.env.PUBLIC_URL+"/Group 4.png"} alt="" className="btn_img"/>
                                </div>
                                <div className="button_img btn p-0">
                                    <img src= {process.env.PUBLIC_URL+"/Group 5.png"} alt="" className="btn_img"/>
                                </div>
                                <div className="button_img btn p-0">
                                    <img   src= {process.env.PUBLIC_URL+"/Group 6.png"} alt="" className="btn_img"/>
                                </div>
                                <div className="button_img btn p-0">
                                    <img  src= {process.env.PUBLIC_URL+"/bet_btn.png"} alt="" className="btn_img"/>
                                </div>

                            </div>
                                
                        </div>
                    </div>
                </div>
                <div className="col-3 mt-sm-0 p-0 align-self-center">
                   

       <a href=""><img className="img-fluid"src={process.env.PUBLIC_URL+"/Replay Button.png"}   /></a>                 
    <a href=""><img className="img-fluid"src={process.env.PUBLIC_URL+"/Star Button.png"} /></a>
                   <a href=""><img className="img-fluid"src={process.env.PUBLIC_URL+"/Stats Button.png"}/></a>                   
                    <a href=""><img className="img-fluid square" src={process.env.PUBLIC_URL+"/table.png"} /></a>
                                         <a href=""><img className="img-fluid square" src={process.env.PUBLIC_URL+"/lobby.png" }/></a>

                </div>

              </div>
            </div>
            
        </div>
</div>
    </div>
    </div>




        
  
    )
  }

}
export default FrontScreen;