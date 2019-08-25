import React, { Component } from 'react'

import './Frontview.css'

export default class Frontview extends Component {


    
  constructor(props) {
    super(props)
  
    this.state = {
    //   handlerclick1:false,
      handlerclick:true,
      value:52
  
       
    }
    this.handlerclick=this.handlerclick.bind();
  }    
    

  handlerclick=()=>{
      console.log('hello');

      const{handlerclick}= this.state;
      this.setState({
      handlerclick:!handlerclick
      })      
  }

  handlerChangeValue=()=>{
    console.log('slide moving')

  }
  handlerchange=(event)=>{
      console.log('hrllll')
  }


    render() {
        return (
            <div >
              




   
              <div class="container">
    <div className="row">
        <div className="col-12">

            <div className="bg-color">

            </div>
            {/* <video autoplay loop class="bg_video" muted plays-inline>
                <source src="video/bgvideo.mp4" type="video/mp4">
            </video> */}
            
            
            
            <div className="d-flex align-items-start flex-column ">
            
                <div className="mb-auto container-1 d-flex align-content-center flex-wrap position-absolute">
                    
                    <div className="col d-block side-content text-center bg font_color">
                        
                        {/* <img id="hot" src="images/Layer5.png">
                        <img id="hot" src="images/HOT.png"> */}
                                   
            <img src={process.env.PUBLIC_URL+"/layer5.png"}/>
           <img src={process.env.PUBLIC_URL+"/hot.png"}/>



                        <p id="number" class="mb-sm-0 py-lg-1">1</p>
                        <p id="number" class="mb-sm-0 py-lg-1">2</p>
                        <p id="number" class="mb-sm-0 py-lg-1">3</p>
                        <p id="number" class="mb-sm-0 py-lg-1">4</p>
                        <p id="number" class="mb-sm-0 py-lg-1">5</p>
                        <p id="number" class="mb-sm-0 py-lg-1">6</p>
                    </div>

                </div>
            </div>

           <div className="col-12 bottom-container">
                <div className="row">
                    <div className="col-3 w-100 p-0">
                        <div className="col-12 border-right p-0">
                            <div className="input-group">
                                <input className="input-group-append w-100 bg text-black font_color" type="text" name="text"
                                    placeholder="CLICK TO CHAT"/><span><a href=""><i class="fa fa-paper-plane-o chat_send_button"
                                            aria-hidden="true"></i></a></span>
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
                    <div className="col-6 d-flex border-right">
                        
                        <div className="col-12 d-flex background_color px-1">
                            <div className="col-2 p-0">
                                <p className="font_color my-2">CLICK THE NUMBERS TO PLACE BET
                                </p>
                                {/* <!-- <img class="h-50 col-12 m-2 w-75" src="images/text.png" alt=""> --> */}
                            </div>
                            
                            
                            {/* <!--buttons--> */}
                            
          
                                <div className="col-lg-10 d-flex col-md-10 col-sm-10 px-0 btn-group">
                                {/* <!-- button-1 && bar-1--> */}


                            
                                {
                                     this.state.handlerclick &&
                             <div className="col-2 bar m-0 text-center child bar-1" id="bar1">
                            
                                <div><span className="bet_range" id="demo">{this.state.value}</span>
                                   <div className="slidecontainer">
                            
                                  <input onChange={(event) => this.handlerchange()}  type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange"/>
                                 </div>
                              </div>
                              {/* </div>} */}
                            
                        </div>}
                        {/* </div> */}
                    
                        
                    
                        <div class="col-2 button_img btn p-0 parant h-100">
                            {/* <img onclick="barVisibility('1');" src="images/Group-1.png" alt="" class="btn_img"/> */}
                        
                            <img   onClick={this.handlerclick.bind(this)} src= {process.env.PUBLIC_URL+"/Group 1.png"} alt="" className="btn_img"/>
                                
                        </div>
                            
                                {/* <!--button-2 && bar-2--> */}
                                <div class="col-2 bar m-0 child bar-2" id="bar2">
                                    <span className="bet_range" id="demo">0</span>
                                    <div className="slidecontainer">
                                        {/* <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/> */}
                            
                                    </div>
                                </div>
                                <div className="col-2 button_img btn p-0 h-100 parant">
                                <img    src= {process.env.PUBLIC_URL+"/Group 2.png"} alt="" className="btn_img"/>
                                
                                </div>
                            
                                {/* <!--button-3 && bar-3--> */}
                                <div className="col-2 bar m-0 child bar-3" id="bar3">
                                    <span className="bet_range" id="demo">0</span>
                                    <div className="slidecontainer">
                                        {/* <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/> */}
                            
                                    </div>
                                </div>
                                <div className="col-2 button_img btn p-0 h-100 parant">
                                <img    src= {process.env.PUBLIC_URL+"/Group 3.png"} alt="" className="btn_img"/>
                               
                                </div>
                            
                            
                                {/* <!--button-4 && bar-4--> */}
                                <div className="col-2 bar m-0 child bar-4" id="bar4">
                                    <span className="bet_range" id="demo">0</span>
                                    <div className="slidecontainer">
                                        {/* <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/> */}
                            
                                    </div>
                                </div>
                                <div className="col-2 button_img btn p-0 h-100 parant">
                                <img    src= {process.env.PUBLIC_URL+"/Group 4.png"} alt="" className="btn_img"/>
                                
                                </div>
                            
                                {/* <!--button-5 && bar-5--> */}
                                <div className="col-2 bar m-0 child bar-5" id="bar5">
                                    <span className="bet_range" id="demo">0</span>
                                    <div className="slidecontainer">
                                        {/* <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/> */}
                            
                                    </div>
                                </div>
                                <div className="col-2 button_img btn p-0 h-100 parant">
                                <img    src= {process.env.PUBLIC_URL+"/Group 5.png"} alt="" className="btn_img"/>
                               
                                </div>
                            
                                {/* <!--button-6 && bar-6--> */}
                                <div className="col-2 bar m-0 child bar-6" id="bar6">
                                    <span className="bet_range" id="demo">0</span>
                                    <div className="slidecontainer">
                                        {/* <input type="range" min="0" max="100" value="0" className="slider" id="myRange"/> */}
                            
                                    </div>
                                </div>
                                <div className="col-2 button_img btn p-0 h-100 parant">
                                <img   src= {process.env.PUBLIC_URL+"/Group 6.png"} alt="" className="btn_img"/>
                              
                                </div>
                            
                            
                                {/* <!--bet-button--> */}
                                <div className="col-2 button_img parant h-100 p-0">
                                    {/* <img onclick="barVisibility('6');" src="images/bet_btn.png" alt="" class="btn_img border border-black"> */}

                                    <img  src= {process.env.PUBLIC_URL+"/bet_btn.png"} alt="" className="btn_img border border-black"/>
                              
                            
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    <div className="col-3 mt-sm-0 p-0 align-self-center">
                        {/* <a href=""><img class="img-fluid" src="images/F3_Game_UI/replay.png" alt=""></a>
                        <a href=""><img class="img-fluid" src="images/F3_Game_UI/star.png" alt=""></a>
                        <a href=""><img class="img-fluid" src="images/F3_Game_UI/stats.png" alt=""></a>
                        <a href=""><img class="img-fluid square" src="images/F3_Game_UI/table.png" alt=""></a>
                        <a href=""><img class="img-fluid square" src="images/F3_Game_UI/lobby.png" alt=""></a>
                     */}

              

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
