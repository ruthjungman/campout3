function setup() {
  createCanvas(400, 400);
}
var y = 0;
function draw() {



    background(29, 40, 115);  
    
    //stars
    fill(255, 242, 0);
    ellipse(250,y+10,10,10);
    ellipse(150,y+10,10,10);
    ellipse(200,y,10,10);
    ellipse(50,y, 10, 10);
    ellipse(100,y,10,10);
    ellipse(300,y,10,10);
    ellipse(350,y+10,10,10);
    ellipse(75,y-7,10,10);
    
    //landscape
    fill(46, 94, 46);
    ellipse(100,400,300,200);
    ellipse(300,400,300,200);
    ellipse(200,370,300,200);
    fill(209, 190, 190);
    ellipse(100,75,100,100);
    fill(107, 99, 99);
    ellipse(100,75,15,15);
    ellipse(75,50,10,10);
    ellipse(125,40,5,5);
    ellipse(120,100,5,5);
    ellipse(60,90,10,10);
    
    //tent
    fill(0, 162, 255);
    triangle(100,300,300,300,200,100);
    fill(13, 10, 48);
    triangle(150,300,250,300,200,150);
    
    //rug
    fill(141, 24, 145);
    rect(100,300,200,50);
    
    //flag
    fill(252, 252, 252);
    rect(198,75,3,30);
    fill(255, 0, 0);
    triangle(200,75,200,95,220,85);
    
  
    
    y=y+1;
}