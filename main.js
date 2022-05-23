function preload(){

}
function setup(){
   canvas= createCanvas(600,600);
  canvas.position(100,200);
  webcam=createCapture(VIDEO);
  webcam.hide();
  rainbow="";
}
function draw(){
image(webcam,70, 60 , 200, 200);
tint(rainbow);
circle(30 , 20 , 40);
fill(0,130,0);
rect(50, 15, 255, 10);
circle(325 , 20 , 40)
rect(320,40,10,250)
circle(325,300,40)
rect(35,300,270,10)
circle(25,300,40)
rect(22,40,10,240)
}
function take_snapshot(){
  save('best_image.png')  
}
  
