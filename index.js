import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';



let imageAdress = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/';


class Canvas extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,640,448);
    ctx.fillStyle = "blue";
    for (let i = 0; i< Maze.length;i++){
      for (let j = 0; j<Maze[i].length;j++){
          let x = 32*j;
          let y = 32*i;
        switch (Maze[i].charAt(j)){
          case '0':
            ctx.fillRect(x,y,31,31);
            break;
          case 'P':
            drawImage(ctx,x,y,'pac_man_0.png');
            /*let img = new Image();
            img.src = imageAdress+'pac_man_0.png';
            img.onload = function(){
            ctx.drawImage(img,x,y);
            }*/
            break;
          case 'G':
            drawImage(ctx,x,y,'spr_ghost_orange_0.png');
            /*let img1 = new Image();
            img1.src = imageAdress+'spr_ghost_orange_0.png';
            img1.onload = function(){
            ctx.drawImage(img1,x,y);
            }*/
            break;
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




class App extends Component {
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
}

render(<App />, document.getElementById('root'));
