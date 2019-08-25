
// // import React, { Component } from 'react'
// // import { ButtonGroup,Button } from 'react-bootstrap';
// // import './FrontScreen.css'

// // export default class FrontScreen extends Component {
// //     render() {
// //         return (
// //             <div className="container">
                




// //     <div class="row">
           

// //             <div className="col-12 position-relative text-center bg-dark">
// //               <div className="row">
// //                 <div className="col-3 w-100 p-0">
// //                   <div className="col-12 border-right p-0">
// //                      <div className="input-group">
// //                       <input className="input-group-append w-100 bg text-black font_color" type="text" name="text" placeholder="CLICK TO CHAT"/>
// //                      </div>
// //                   </div>
// //                   <div class="col-12 border-right">
// //                       <div class="row d-flex flex-nowrap">
                       
// //                         <div class="col bg m-1 p-0">
// //                           <p class="font_color text-center p-auto m-0">BALANCE</p>
// //                             <span id="balance"><small>10000</small></span>
                
// //                         </div>

// //                           <div class="col bg m-1 p-0">
// //                              <p class="font_color text-center p-auto m-0">TOTAL BET</p>
// //                             <span id="total-balance"><small>10000</small></span>
// //                           </div>
// //                       </div>
// //                   </div>
// //                 </div>
// //                 <div className="col-6 border-right">
                    
// //                     <div class="col-12 d-lg-flex d-md-block bg p-1">
// //                         <div class="col-lg-3 col-md-3 p-2 w-100">
// //                             {/* <p className="font_color small">Click The Number To place Bet</p>  */}
// //                             <img class="h-50 col-12 m-2 w-75" src={process.env.PUBLIC_URL+"/text.png"} alt=""/>
// //                         </div>
                       
// //                         <div class="col-lg-9 col-md-12 p-0 ">
// //                             <ButtonGroup>
// //                             <Button class="button" style={{border:"none",background:"none"}}><img onclick="barVisibility('1');" src= {process.env.PUBLIC_URL+"/Group 1.png"} alt="" class="btn_img"/></Button>

                            
// //                             <Button class="button" style={{outline:"none",border:"none",background:"none"}}><img onclick="barVisibility('2');" src= {process.env.PUBLIC_URL+"/Group 2.png"} alt="" class="btn_img"/></Button>
// //                             <Button class="button" style={{ outline:"none",border:"none",background:"none"}}><img onclick="barVisibility('3');" src= {process.env.PUBLIC_URL+"/Group 3.png"} alt="" class="btn_img"/></Button>
// //                             <Button class="button" style={{ outline:"none",   border:"none",background:"none"}}><img onclick="barVisibility('4');" src= {process.env.PUBLIC_URL+"/Group 4.png"} alt="" class="btn_img"/></Button>
// //                             <Button class="button" style={{ outline:"none",border:"none",background:"none"}}><img onclick="barVisibility('5');" src= {process.env.PUBLIC_URL+"/Group 5.png"} class="btn_img"/></Button>
                            
// //                             <Button className="button" style={{border:"none",background:"none"}}><img onclick="barVisibility('6');" src= {process.env.PUBLIC_URL+"/Group 6.png"} alt="" class="btn_img"/></Button>
// //                             </ButtonGroup>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="col-3 mt-sm-0 p-0 align-self-center">

// //                 <a href=""><img className="img-fluid"src={process.env.PUBLIC_URL+"/Replay Button.png"}   /></a>
// //                     <a href=""><img className="img-fluid"src={process.env.PUBLIC_URL+"/Star Button.png"} /></a>
// //                     <a href=""><img className="img-fluid"src={process.env.PUBLIC_URL+"/Stats Button.png"}/></a>
// //                     <a href=""><img className="img-fluid square" src={process.env.PUBLIC_URL+"/table.png"} /></a>
// //                     <a href=""><img className="img-fluid square" src={process.env.PUBLIC_URL+"/lobby.png" }/></a>

// //                 </div>

// //               </div>
// //             </div>
            
// //         </div>

// //     </div>


      
// //         )
// //     }
// // }

// import React, { Component } from 'react'
// import './FrontScreen.css'

// export default class Footerbar extends Component {
//     render() {
//         return (
                
// //                 <div class="container">
// //     <div className="row">
// //         <div class="col-12">
// //             <div class="col-1 ml-1 h-md-50 position-absolute text-danger text-center bg font_color p-1">
               
                        
// //                         {/* <img id="hot" src="images/Layer5.png">
// //                         <img id="hot" src="images/HOT.png"> */}

// //                         <p id="number">1</p>
// //                         <p id="number">2</p>
// //                         <p id="number">3</p>
// //                         <p id="number">4</p>
// //                         <p id="number">5</p>
// //                         <p id="number">6</p>
// //             </div>
            

// //                  <div class="col-12 h-25 position-relative d-flex">
                    
// //                     <div class="col-3">
// //                        <div id="chat_layer"></div>
// //                     </div>

// //                     <div class="col-6 d-flex justify-content-end">
// //                          <div class="col-3 d-lg-block"></div>
// //                         <div class="col-lg-9 col-md-10 d-flex p-0 pr-sm-3 pr-lg-5 pr-md-4 col-sm-9">
// //                             <div class="col-2 bar m-0 text-center" id="bar1">
                                  
// //                                     <span class="bet_range" id="demo">0</span>
                                
// //                                   <div class="slidecontainer">
                              
// //                                     <input type="range" min="0" max="1000" value="0" class="slider" id="myRange"/>
                                   
// //                                 </div>
// //                             </div>
// //                             <div class="col-2 bar m-0" id="bar2">
// //                                 <span class="bet_range" id="demo">0</span>
// //                                 <div class="slidecontainer">
// //                                     <input type="range" min="0" max="100" value="0" class="slider" id="myRange"/>
                                  
// //                                 </div>
// //                             </div>
// //                             <div class="col-2 bar m-0" id="bar3">
// //                                 <span class="bet_range" class="bet_range" id="demo">0</span>
// //                                 <div class="slidecontainer">
// //                                     <input type="range" min="0" max="100" value="0" class="slider" id="myRange"/>
                                    
// //                                 </div>
// //                             </div>
// //                             <div class="col-2 bar m-0" id="bar4">
// //                                 <span class="bet_range" id="demo">0</span>
// //                                 <div class="slidecontainer">
// //                                     <input type="range" min="0" max="100" value="0" class="slider" id="myRange"/>
// //                                 </div>
// //                             </div>
// //                             <div class="col-2 bar m-0" id="bar5">
// //                                 <span class="bet_range" id="demo">0</span>
// //                                 <div class="slidecontainer">
// //                                     <input type="range" min="0" max="100" value="0" class="slider" id="myRange"/>
// //                                 </div>
// //                             </div>
// //                             <div class="col-2 bar m-0" id="bar6">
// //                                 <span class="bet_range" id="demo">0</span>
// //                                 <div class="slidecontainer">
// //                                     <input type="range" min="0" max="100" value="0" class="slider" id="myRange"/>
// //                                 </div>
// //                             </div>
// //                         </div>
                   
// //                   </div>

               
// //                 </div>

                

// //             <div class="col-12 position-relative text-center bg-dark">
// //               <div class="row">
// //                 <div class="col-3 w-100 p-0">
// //                   <div class="col-12 border-right p-0">
// //                      <div class="input-group">
// //                       <input class="input-group-append w-100 bg text-black font_color" type="text" name="text" placeholder="CLICK TO CHAT"/><span><a href=""><i class="fa fa-paper-plane-o chat_send_button" aria-hidden="true"></i></a></span>
// //                      </div>
// //                   </div>
// //                   <div class="col-12 border-right">
// //                       <div class="row d-flex flex-nowrap">
                       
// //                         <div class="col bg m-1 p-0">
// //                           <p class="font_color text-center p-auto m-0">BALANCE</p>
// //                             <span id="balance"><small>10000</small></span>
                
// //                         </div>

// //                           <div class="col bg m-1 p-0">
// //                              <p class="font_color text-center p-auto m-0">TOTAL BET</p>
// //                             <span id="total-balance"><small>10000</small></span>
// //                           </div>
// //                       </div>
// //                   </div>
// //                 </div>
// //                 <div class="col-6 border-right p-sm-0 px-lg-2">
                    
// //                     <div class="col-12 d-lg-flex d-md-flex d-sm-flex d-xs-flex bg p-sm-0">
// //                         <div class="col-lg-3 col-md-2 col-sm-4 col-xs-4 p-0 w-100">
// //                             <p class="font_color my-2 text-wrap text-truncate">CLICK THE NUMBERS TO PLACE BET</p>
// //                      <img class="h-50 col-12 m-2 w-75" src="images/text.png" alt=""/> 
// //                         </div>
                       
                       
// //                         <div class="col-lg-9 col-md-10 col-sm-8 col-xs-7 p-0 btn-group">
// //                             <div class="col-lg-12 col-sm-12 p-0 d-flex btn-group">
// //                                 <div class="button_img btn p-0">
// //                                     <img onclick="barVisibility('1');" src="images/Group-1.png" alt="" class="btn_img"/>
// //                                 </div>
// //                                 <div class="button_img btn p-0">
// //                                     <img onclick="barVisibility('2');" src="images/Group-2.png" alt="" class="btn_img"/>
// //                                 </div>
// //                                 <div class="button_img btn p-0">
// //                                     <img onclick="barVisibility('3');" src="images/Group-3.png" alt="" class="btn_img"/>
// //                                 </div>
// //                                 <div class="button_img btn p-0">
// //                                     <img onclick="barVisibility('4');" src="images/Group-4.png" alt="" class="btn_img"/>
// //                                 </div>
// //                                 <div class="button_img btn p-0">
// //                                     <img onclick="barVisibility('5');" src="images/Group-5.png" alt="" class="btn_img"/>
// //                                 </div>
// //                                 <div class="button_img btn p-0">
// //                                     <img onclick="barVisibility('6');" src="images/Group-6.png" alt="" class="btn_img"/>
// //                                 </div>
// //                                 <div class="button_img btn p-0">
// //                                     <img onclick="barVisibility('6');" src="images/bet_btn.png" alt="" class="btn_img"/>
// //                                 </div>

// //                             </div>
// //                                 {/* <div class="col-2 p-0"><img onclick="barVisibility('1');" src="images/Group-1.png" alt="" class="btn_img"></div>

                                
// //                                 <div class="col-2 p-0"><img onclick="barVisibility('2');" src="images/Group-2.png" alt="" class="btn_img"></div>
// //                                 <div class="col-2 p-0"><img onclick="barVisibility('3');" src="images/Group-3.png" alt="" class="btn_img"></div>
// //                                 <div class="col-2 p-0"><img onclick="barVisibility('4');" src="images/Group-4.png" alt="" class="btn_img"></div>
// //                                 <div class="col-2 p-0"><img onclick="barVisibility('5');" src="images/Group-5.png" alt="" class="btn_img"></div>
// //                                 <div class="col-2 p-0"><img onclick="barVisibility('6');" src="images/Group-6.png" alt="" class="btn_img"></div> -->
// //                                 */}
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div class="col-3 mt-sm-0 p-0 align-self-center">
// //                     {/* <a href=""><img class="img-fluid" src="images/F3_Game_UI/replay.png" alt=""></a>
// //                     <a href=""><img class="img-fluid" src="images/F3_Game_UI/star.png" alt=""></a>
// //                     <a href=""><img class="img-fluid" src="images/F3_Game_UI/stats.png" alt=""></a>
// //                     <a href=""><img class="img-fluid square" src="images/F3_Game_UI/table.png" alt=""></a>
// //                     <a href=""><img class="img-fluid square" src="images/F3_Game_UI/lobby.png" alt=""></a> */}

// //                 </div>

// //               </div>
// //             </div>
            
// //         </div>

// //     </div>
// // </div>










        
//         )
//     }
// }



import React, { Component } from 'react'

export default class Footerbar extends Component {
    render() {
        return (
            <div>
                instamojo-
            </div>
        )
    }
}
