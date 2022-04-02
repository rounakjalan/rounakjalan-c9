//Variable named "Stripes" to create a new group
var stripes;

function setup() {
  createCanvas(450, 400);

  

   //Draw stripes using for loop
  for (var x =30; x < 450 ; x=x+55)
   varstripe = createsprite(x,200,35,300);
   stripe.shapecolor="white";

             
            
}

function draw() {
  background("grey");

  drawSprites();
}
