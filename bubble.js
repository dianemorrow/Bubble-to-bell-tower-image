function Bubble (x,y,r) {               
  this.x = x;
  this.y = y;
  this.r = r;
  this.col = color (0);
  
  
  this.display = function () {
    stroke (0);
    fill (this.col);
    ellipse (this.x, this.y, this.r * 2, this.r * 2);
  }
  
  this.clicked = function () {
    var d = dist (mouseX, mouseY, this.x, this.y);
    if (d < this.r) {
      bubbleExpanding = false;  //not only pops the bubble but changes the state
   }
  }
  
  this.update = function () {
      this.r = this.r + .5;
    } 
    
}