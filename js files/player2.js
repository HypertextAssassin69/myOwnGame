var current,centre,rand;
class Player2{
    constructor(){
        this.start();
        //this.random = random;
    }
    Dice(){
        dice = createSprite(500, 550, 50, 50);
        dice.addImage(image1);
        dice.scale = 0.3;
         rand = Math.round(random(1,6));
        switch(rand){
          case 1: dice.addImage(image1);dice.scale = 0.3;this.spot +=1;
          break;
          case 2: dice.addImage(image2);dice.scale = 0.3;this.spot +=2;
          break;
          case 3: dice.addImage(image3);dice.scale = 0.3;this.spot +=3;
          break;
          case 4: dice.addImage(image4);dice.scale = 0.3;this.spot +=4;
          break;
          case 5: dice.addImage(image5);dice.scale = 0.3;this.spot +=5;
          break;
          case 6: dice.addImage(image6);dice.scale = 0.3;this.spot +=6;
          break;

        }
        if (this.spot === 98){
            this.spot = 0;
        }
        if (this.spot === 95){
            this.spot = 49;
        }
        if (this.spot === 78){
            this.spot = 41;
        }
        if (this.spot === 14){
            this.spot = 8;
        }
        if (this.spot === 83){
            this.spot = 47;
        }
        if (this.spot === 57){
            this.spot = 32;
        }
        if (this.spot === 39){
            this.spot = 24;
        }
  
        //ladder |
        //       v
        
        
        if (this.spot === 2){
            this.spot = 24;
        }
        if (this.spot === 95){
            this.spot = 49;
        }
        if (this.spot === 78){
            this.spot = 41;
        }
        if (this.spot === 14){
            this.spot = 8;
        }
        if (this.spot === 83){
            this.spot = 47;
        }
        if (this.spot === 57){
            this.spot = 32;
        }
        if (this.spot === 39){
            this.spot = 24;
        }
        if (this.spot>= tiles.length){
            this.spot = this.spot - rand;
           
        }
        if (tile){
            this.spot += tile.snakeorladder;
        }
      }
   
      show(tiles){
        let current = tiles[this.spot];
       fill("red");
       let centre = current.getCentre();
       ellipse(centre[0],centre[1],32);
   }
    
    start(){
        this.spot = 0;  
    }
}


 