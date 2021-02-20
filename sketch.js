var image1,image2,image3,image4,image5,image6
var dice,rollButton,rollButton2,player,tiles,resolution,rows,columns,rand;

var tiles =[];
var bg,bgImage
function setup() {
  createCanvas(600,600);
  rollButton = createButton("Roll");
  rollButton2 = createButton("Roll");
  player = new Player();
  player2 = new Player2();
  //if()
 /* player2.snakeBitten();
player.snakeBitten();*/
  


player.start();
player2.start();

  
  resolution = 60;
 rows = width/resolution;
  columns = height/resolution;
 let x = 0;
 let y = (rows-1)*resolution;
 let dir = 1;
 
  for (var i = 0;i<columns*rows;i++ ){
   tile = new Tile(x,y,resolution,i,i+1);
   tiles.push(tile);
   x = x + (resolution*dir);
   if(x>=width||x<=-1*(resolution)){
    dir *= -1;
    x += resolution*dir;
     y -= resolution;
     
   }
   
   

 }
 tiles[2].snakeorladder = +21;
tiles[95].snakeorladder = -46;
tiles[78].snakeorladder = -37;
tiles[14].snakeorladder = -6;
tiles[83].snakeorladder = -36;
tiles[57].snakeorladder = -25;
tiles[39].snakeorladder = -15;

tiles[98].snakeorladder = -98;
tiles[95].snakeorladder = -46;
tiles[78].snakeorladder = -37;
tiles[14].snakeorladder = -6;
tiles[83].snakeorladder = -36;
tiles[57].snakeorladder = -25;
tiles[39].snakeorladder = -15;





//ladder |
//       v



//tiles[3].snakeorladder = -2;
  
}
function preload(){
image1 = loadImage("images/1.png");
image2 = loadImage("images/2.png");
image3 = loadImage("images/3.png");
image4 = loadImage("images/4.png");
image5 = loadImage("images/5.png");
image6 = loadImage("images/6.png");
bgImage = loadImage("images/bg.jpg");
}

function draw() {
  background("yellow");  
 
  

 
    
    //tiles[1].snakeorladder = -1;

     //tile.show(tiles);
     for (let tile of tiles){
     tile.show(tiles);
     
  }
  rollButton.position(150,550);
 rollButton2.position(550,550);
  
  rollButton.mousePressed(()=>{
     player.Dice(tiles);
     rollButton.hide();
     rollButton2.show();
     

     
   })
   rollButton2.mousePressed(()=>{
    player2.Dice(tiles);
    rollButton.show();
    rollButton2.hide();


    
  })
 
   player.show(tiles);
   player2.show(tiles)
   
   
  drawSprites();
}
