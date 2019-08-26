// import React, { Component } from 'react'
//  import {Row,Col, Button,ButtonGroup, Container,} from 'react-bootstrap';
//  import './DownBar.css'

// export default class DownBar extends Component {
//     render() {
//         return (
          
//             <div className="bar" >
            
           

            
//             <Row>
//     <Col>


//     <input className="chat-box" type="text " height="5px" width="100px"  placeholder="click chat"/>

//     <div className="bal-box">
//     <p class="font_color text-center p-auto"><small>BALANCE</small></p>
//     </div>
//     <div className="bal-box">
//     <p class="font_color text-center p-auto"><small>TOTAL BET</small></p>
  
// </div>



     
//     </Col>
//     <span class="divider" >

// </span>


//     <Col>
    
        
    
//     <div className=" border-box  " >
//         <p className="font_color small" style={{color:'brown'}}>Click The Number To place Bet</p>
//     <ButtonGroup className="btn-group">

//  <Button style={{ border:"none",background:"none"}} variant="outline-secondary"><img src={process.env.PUBLIC_URL+"/Group 1.png"} class="btn_img"  alt="btn-pic " />
//   </Button >
//  <Button variant="outline-secondary" style={{border:"none",background:"none" , Cursor:"none" }}><img src={process.env.PUBLIC_URL+"/Group 2.png" } class="btn_img"   />
//  </Button>
//  <Button  variant="outline-secondary" style={{border:"none",background:"none"}}><img src={process.env.PUBLIC_URL+"/Group 3.png"}  class="btn_img" />
//  </Button>
//  <Button  variant="outline-secondary" style={{border:"none",background:"none"}}><img src={process.env.PUBLIC_URL+"/Group 4.png"} class="btn_img" />
//  </Button>
//  <Button  variant="outline-secondary"  style={{border:"none",background:"none"}} ><img src={process.env.PUBLIC_URL+"/Group 5.png"}  class="btn_img"/>
//  </Button>
//  <Button  variant="outline-secondary"  style={{border:"none",background:"none"}} ><img src={process.env.PUBLIC_URL+"/Group 6.png" } class="btn_img"/>
//  </Button>

 

//  </ButtonGroup>
 

// </div>
    
    
//     </Col>
//     <span class="divider" >

// </span>
//     <div className="icons"> 
//     <Col >  

//    <a href="#"><img src={process.env.PUBLIC_URL+"/Star Button.png"} width="30px" height="30px" style={{margin:5}}/></a>
//    <a href="#"><img src={process.env.PUBLIC_URL+"/Replay Button.png"} width="30px" height="30px" style={{margin:5}}/></a>
//    <a href="#"><img src={process.env.PUBLIC_URL+"/Stats Button.png"} width="30px"  height="30px"style={{margin:5}}/></a>
//    <a href="#"><img src={process.env.PUBLIC_URL+"/20.png"} width="90px"  height="50px"/></a>
//    <a href="#"><img src={process.env.PUBLIC_URL+"/20.png"} width="80px" height="50px"/></a>
//     </Col>
//     </div>
//   </Row>



//             </div>
        
//         )
//     }
// }

// import React, { Component } from 'react'
// import Slider from 'react-rangeslider'
// import 'react-rangeslider/lib/index.css'

// class DownBar extends Component {
//   constructor (props, context) {
//     super(props, context)
//     this.state = {
//       value: 25,
//       reverseValue: 8
//     }
//   }

//   handleChange = (value) => {
//     this.setState({
//       value: value
//     })
//   }

//   handleChangeReverse = (value) => {
//     this.setState({
//       reverseValue: value
//     })
//   }

//   render () {
//     const { value, reverseValue } = this.state
//     return (
//       <div className='slider orientation-reversed'>
//         <div className='slider-group'>
//           <div className='slider-vertical'>
//             <Slider
//               min={0}
//               max={100}
//               value={value}
//               orientation='vertical'
//               onChange={this.handleChange}
//             />
//             <div className='value'>{value}</div>
//           </div>
//           <div className='slider-horizontal'>
//             <Slider
//               min={0}
//               max={10}
//               value={reverseValue}
//               orientation='horizontal'
//               onChange={this.handleChangeReverse}
//             />
//             <div className='value'>{reverseValue}</div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default  DownBar









// import  React ,{Component}from 'react'
// import {Col,itemType,Image,teasers,Row,Grid} from 'react-bootstrap'
// // At the moment when a button is clicked, all of them change to 'Voted'

// class Items extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasVoted: false };

//         this.OnClick = this.OnClick.bind(this);
//     }

//     OnClick() {
//         this.setState(prevState => ({
//             hasVoted: !prevState.hasVoted
//         }));
//     }

//     render() {
//         const Item = teasers.items.map(item =>
//             <Col key={item.nid}>
//                 <span>
//                     {itemType}
//                 </span>

//                 <a href={item.path}>
//                     <Image src={item.image.src} title={item.productType} />
//                     <span>
//                         {item.Title}
//                     </span>
//                     <div className={teasersStyle.copy}>
//                         {" "}{item.Copy}>
//                     </div>
//                 </a>

//                 <div
//                     className={this.state.hasVoted ? "active" : "notactive"}
//                     onClick={this.OnClick}
//                 >
//                     {this.state.hasVoted ? "Voted" : "Vote"}
//                 </div>
//             </Col>
//         );
//         return (
//             <div>
              
//                     <Row>
//                         {Item}
//                     </Row>
                
//             </div>
//         );
//     }
// }

// export default Items;


import React, { Component } from 'react';

class DownBar extends Component {  
    constructor( props ){
        super( props )
        this.state = {show : true};
        this.showHide = this.showHide.bind(this)
    }
    render() {
        return (    
            <section id="content">
                <div className="top-content">
                    <div className="container">
                        <h1>React</h1>
                        <h2>A JavaScript library for building user interfaces</h2>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <div>
                            <h3>Declarative</h3>
                            <button onClick={this.showHide} className="button-primary btn">{this.changeName()}</button>
                            { this.state.show && 
                                <div>
                                    <p>text</p>
                                    <p>text</p>
                                </div>
                            }
                        </div>
                        <div>
                            <h3>Component-Based</h3>
                            <button onClick={this.showHide} className="button-primary btn">{this.changeName()}</button>
                            { this.state.show && 
                                <div>
                                    <p>text</p>
                                    <p>text</p>
                                </div>
                            }
                        </div>
                        <div>
                            <h3>Learn Once, Write Anywhere</h3>
                            <button onClick={this.showHide} className="button-primary btn">{this.changeName()}</button>
                            { this.state.show && 
                                <div>
                                    <p>text</p>
                                    <p>text</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
      );  
    }
    changeName(){
        let text = "text "
        text += this.state.show === true ? "hide" : "show";
        return text;
    }
    showHide(){
        const { show } = this.state;
        this.setState( { show : !show})
    }
}
export default DownBar;
