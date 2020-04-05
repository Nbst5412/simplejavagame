class Paddle {
 constructor(gameWidth,gamwHeight) {
   this.width= 190;
   this.height= 100;

   this.position{
    x: gameWiidth/2-this.width/2,
    y: gameHeight-this.Height-10,
   }
 }


 draw(ctx){
  ctx.fillRect(this.position.x, this.positon.y, this.width, this.height);
 }
}