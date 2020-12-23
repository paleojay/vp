//Create variables here
var dog,dogi;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
	dogi=loadImage("dog.png")
	happyDog=loadImage("happydog.png")
}

function setup() {
  database=firebase.database();
    console.log(database);
	createCanvas(500, 500);
  
	dog=createSprite(width/2, 80, 50,50);
	dog.addImage(dogi)
	dog.scale=0.2

  
  var foodStock=database.ref('ball/position');
  foodStock.on("value",readStock);
}


function draw() {  
  background("white");

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  textPrint(foodStock);
  textSize(20);
  textfill("white");
  textstroke(5);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
   x=x-1;
  }
  database.ref('/').update({
      Food:x
  })
}



