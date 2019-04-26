import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';



let imageAdress = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/';
let cWidth = 480;
let cHeight = 480;

let g = Game;


class Canvas extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d")
    //ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,480,480);
    ctx.fillStyle = "blue";

    ctx.strokeStyle = 'black';
    ctx.stroke();

    for (let i = 0; i < 8; i++){
      for (let j = 0; j < 8; j++){
          let x = 60*j;
          let y = 60*i;

          if (i % 2 == 0 & j % 2 == 0) {
            drawImage(ctx,x,y,'whiteg.png');
          }
          else if (i % 2 == 1 & j % 2 == 1) {
            drawImage(ctx,x,y,'whiteg.png');
          }
          else {
            drawImage(ctx,x,y,'blackg.png');
          }

        }
        //ctx.strokeText(Maze[i].charAt(j), x+16, y+16);
    }
    canvas.onclick = function(){doSth()};
    
  }
  render() {
    return(
      <div>
        <canvas id="canvas" width={cWidth} height={cHeight} />
      </div>
    )
  }
}

function doSth(){
  this.g.preLoad();
  console.log("sss")
}

static function drawImage(ctx,x,y,src){
  let img = new Image();
  img.src = imageAdress+src;
  ctx.drawImage(img,x,y);
}




/*class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
        </p>
      </div>
    );
  }
}*/

//render(<App />, document.getElementById('root'));


class Game{
  constructor(){
     let state = {
      lives : 3,
      pac : Pacman(),
      ghost : Ghost(),
      map : Maze,
      pacTiles : [
        
      ],
    };
  }
  preLoad(){
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "green";
    ctx.fillText(100,100,"sdawdawdawdawdawdawdawdawdadawda");
    ctx.stroke()
  }
}


render(<Canvas />, document.getElementById('root'));
