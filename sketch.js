var puzzle1,puzzle2,puzzle3,puzzle4,puzzle5,puzzle6,puzzle7,puzzle8;
var puzzle1Img,puzzle2Img,puzzle3Img,puzzle4Img;
var puzzle5Img,puzzle6Img,puzzle7Img,puzzle8Img;
var edge1,edge2,edge3,edge4;
var checkBtn;
var answer1 = false
var answer2 = false
var answer3 = false
var answer4 = false
var answer5 = false
var answer6 = false
var answer7 = false

var movedPuzzle1 = false;
var movedPuzzle2 = false;
var movedPuzzle3 = false;
var movedPuzzle4 = false;
var movedPuzzle5 = false;
var movedPuzzle6 = false;
var movedPuzzle7 = false;

var shiftPuzzle1 = false;
var shiftPuzzle2 = false;
var shiftPuzzle3 = false;
var shiftPuzzle4 = false;
var shiftPuzzle5 = false;
var shiftPuzzle6 = false;
var shiftPuzzle7 = false;

var beingMoved = false


function preload(){
  bgImg = loadImage("stories/bg.jpg")
  bgImg.scale = 0.2;
  puzzle1Img = loadImage("stories/sleepingBeauty/SBscene1.jpg")
  puzzle2Img = loadImage("stories/sleepingBeauty/SBscene2.jpg")
  puzzle3Img = loadImage("stories/sleepingBeauty/SBscene3.jpg")
  puzzle4Img = loadImage("stories/sleepingBeauty/SBscene4.jpg")
  puzzle5Img = loadImage("stories/sleepingBeauty/SBscene5.jpg")
  puzzle6Img = loadImage("stories/sleepingBeauty/SBscene6.jpg")
  puzzle7Img = loadImage("stories/sleepingBeauty/SBscene7.jpg")
 // puzzleImg = loadImage("stories/sleepingBeauty/SBscene(2).jpg")
}
function setup() {
  createCanvas(1200,700);
checkBtn = createButton("check your anwser")
checkBtn.position(1050,450)

  puzzle1 = createSprite(100, 200, 50, 50);
  puzzle1.addImage("sb1",puzzle7Img)
  puzzle2 = createSprite(250, 200, 50, 50);
  puzzle2.addImage("sb2",puzzle6Img)
  puzzle3 = createSprite(400, 200, 50, 50);
  puzzle3.addImage("sb3",puzzle3Img)
  puzzle4 = createSprite(550, 200, 50, 50);
  puzzle4.addImage("sb4",puzzle4Img)
  puzzle5 = createSprite(175, 350, 50, 50);
  puzzle5.addImage("sb5",puzzle5Img)
  puzzle6 = createSprite(325, 350, 50, 50);
  puzzle6.addImage("sb6",puzzle2Img)
  puzzle7 = createSprite(500, 350, 50, 50);
  puzzle7.addImage("sb7",puzzle1Img)

//var solution = [puzzle7,puzzle6,puzzle3,puzzle4,puzzle5,puzzle2,puzzle1]

edge1 = createSprite(850,100,400,10)
edge1.shapeColor = "black"
edge2 = createSprite(850,400,400,10)
edge2.shapeColor = "black"
edge3 = createSprite(650,250,10,300)
edge3.shapeColor= "black"
edge4 = createSprite(1050,250,10,300)
edge4.shapeColor = "black"
  
}

function draw() {
  background(bgImg);  
text([mouseX,mouseY],mouseX,mouseY)
  checkBtn.mousePressed(checkAnswer)

if(puzzle1.isTouching(puzzle2) || puzzle1.isTouching(puzzle3) ||puzzle1.isTouching(puzzle4) || puzzle1.isTouching(puzzle5) ||
puzzle1.isTouching(puzzle6) || puzzle1.isTouching(puzzle7)){
beingMoved = true

}
if(puzzle2.isTouching(puzzle1) || puzzle2.isTouching(puzzle3) ||puzzle2.isTouching(puzzle4) || puzzle2.isTouching(puzzle5) ||
puzzle2.isTouching(puzzle6) || puzzle2.isTouching(puzzle7)){
beingMoved = true

}
if(puzzle3.isTouching(puzzle2) || puzzle3.isTouching(puzzle1) ||puzzle3.isTouching(puzzle4) || puzzle3.isTouching(puzzle5) ||
puzzle3.isTouching(puzzle6) || puzzle3.isTouching(puzzle7)){
beingMoved = true

}
if(puzzle4.isTouching(puzzle2) || puzzle4.isTouching(puzzle1) ||puzzle4.isTouching(puzzle3) || puzzle4.isTouching(puzzle5) ||
puzzle4.isTouching(puzzle6) || puzzle4.isTouching(puzzle7)){
beingMoved = true

}
if(puzzle5.isTouching(puzzle2) || puzzle5.isTouching(puzzle1) ||puzzle5.isTouching(puzzle3) || puzzle5.isTouching(puzzle4) ||
puzzle5.isTouching(puzzle6) || puzzle5.isTouching(puzzle7)){
beingMoved = true

}
if(puzzle6.isTouching(puzzle2) || puzzle6.isTouching(puzzle1) ||puzzle6.isTouching(puzzle3) || puzzle6.isTouching(puzzle4) ||
puzzle6.isTouching(puzzle5) || puzzle6.isTouching(puzzle7)){
beingMoved = true

}
if(puzzle7.isTouching(puzzle2) || puzzle7.isTouching(puzzle1) ||puzzle7.isTouching(puzzle3) || puzzle7.isTouching(puzzle4) ||
puzzle7.isTouching(puzzle6) || puzzle7.isTouching(puzzle5)){
beingMoved = true

}


  if(shiftPuzzle1){
    puzzle1.x = mouseX
    puzzle1.y = mouseY
  }
  if(shiftPuzzle2){
    puzzle2.x = mouseX
    puzzle2.y = mouseY
  }
  if(shiftPuzzle3){
    puzzle3.x = mouseX
    puzzle3.y = mouseY
  }
  if(shiftPuzzle4){
    puzzle4.x = mouseX
    puzzle4.y = mouseY
    console.log("4")
  }
  if(shiftPuzzle5){
    puzzle5.x = mouseX
    puzzle5.y = mouseY
  }
  if(shiftPuzzle6){
    puzzle6.x = mouseX
    puzzle6.y = mouseY
  }
  if(shiftPuzzle7){
    puzzle7.x = mouseX
    puzzle7.y = mouseY
  }

  drawSprites();
}

function mouseDragged(){
console.log("beingmoved"+!beingMoved)
 
  if(!beingMoved && !movedPuzzle1 && mouseX>=75 && mouseX<=125 && mouseY>=175 && mouseY<=225){
console.log("puzzle1")
shiftPuzzle1 = true
movedPuzzle1 = true
  }

 else if(!beingMoved && !movedPuzzle2 && mouseX>=225 && mouseX<=275 && mouseY>=175 && mouseY<=225){
    console.log("puzzle2") 
    shiftPuzzle2 = true
    movedPuzzle2 = true
      }

  else if(!beingMoved && !movedPuzzle3 && mouseX>=405 && mouseX<=425 && mouseY>=175 && mouseY<=225){
    console.log("puzzle3")
    shiftPuzzle3 = true
    movedPuzzle3 = true
          }    
  else if(!beingMoved && !movedPuzzle4 && mouseX>=525 && mouseX<=575 && mouseY>=175 && mouseY<=225){
    console.log("puzzle4")
    shiftPuzzle4 = true
    movedPuzzle4 = true
              }     
  else if(!beingMoved && !movedPuzzle5 && mouseX>=150 && mouseX<=200 && mouseY>=325 && mouseY<=375){
                console.log("puzzle5")
                shiftPuzzle5 = true
                movedPuzzle5 = true
                          }
  else if(!beingMoved && !movedPuzzle6 && mouseX>=300 && mouseX<=350 && mouseY>=325 && mouseY<=375){
                            console.log("puzzle6")
                            shiftPuzzle6 = true
                            movedPuzzle6 = true
                                      }      

else if(!beingMoved && !movedPuzzle7 && mouseX>=475 && mouseX<=525 && mouseY>=325 && mouseY<=375){
  console.log("puzzle7")
  shiftPuzzle7 = true
  movedPuzzle7 = true
            } 
          }
function mouseReleased(){
console.log("mouseReleased")
shiftPuzzle1 = false
shiftPuzzle2 = false
shiftPuzzle3 = false
shiftPuzzle4 = false
shiftPuzzle5 = false
shiftPuzzle6 = false
shiftPuzzle7 = false
beingMoved = false
if(puzzle1.x<=650 || puzzle1.x>=1050 || puzzle1.y<=100 || puzzle1.y>=400){
puzzle1.x = 100
puzzle1.y = 200
movedPuzzle1 = false
}
if(puzzle2.x<=650 || puzzle2.x>=1050 || puzzle2.y<=100 || puzzle2.y>=400){
  puzzle2.x = 250
  puzzle2.y = 200
  movedPuzzle2 = false
  }
if(puzzle3.x<=650 || puzzle3.x>=1050 || puzzle3.y<=100 || puzzle3.y>=400){
  puzzle3.x = 400
  puzzle3.y = 200
  movedPuzzle3 = false
    }
if(puzzle4.x<=650 || puzzle4.x>=1050 || puzzle4.y<=100 || puzzle4.y>=400){
    puzzle4.x = 550
    puzzle4.y = 200
    movedPuzzle4 = false
      }
      if(puzzle5.x<=650 || puzzle5.x>=1050 || puzzle5.y<=100 || puzzle5.y>=400){
        puzzle5.x = 175
        puzzle5.y = 350
        movedPuzzle5 = false
          }
         
          if(puzzle6.x<=650 || puzzle6.x>=1050 || puzzle6.y<=100 || puzzle6.y>=400){
            puzzle6.x = 325
            puzzle6.y = 350
            movedPuzzle6 = false
              }
              if(puzzle7.x<=650 || puzzle7.x>=1050 || puzzle7.y<=100 || puzzle7.y>=400){
                puzzle7.x = 500
                puzzle7.y = 350
                movedPuzzle7 = false
                  }
//console.log(puzzle2.x)
//console.log(puzzle2.y)
}
function checkAnswer(){
  console.log("x:"+puzzle1.x+"y:"+puzzle1.y)
  if(puzzle7.x>655 && puzzle7.x<705 && puzzle7.y>110 && puzzle7.y<160){
answer7 = true
console.log("check7"+answer7)
  }else{
    answer7 = false;
  }
  if(puzzle6.x>785 && puzzle6.x<835 && puzzle6.y>110 && puzzle6.y<160){
    answer6 = true
    console.log("check6"+answer6)
      }else{
        answer6 = false;
      }
      if(puzzle3.x>880 && puzzle3.x<930 && puzzle3.y>110 && puzzle3.y<160){
        answer3 = true
       console.log("check3"+answer3)
          }else{
            answer3 = false;
          }
          if(puzzle4.x>975 && puzzle4.x<1020 && puzzle4.y>110 && puzzle4.y<160){
            answer4 = true
            console.log("check4"+answer4)
              }else{
                answer4 = false;
              }
              if(puzzle5.x>655 && puzzle5.x<705 && puzzle5.y>215 && puzzle5.y<265){
                answer5 = true
                console.log("check5"+answer5)
                  }else{
                    answer5 = false;
                  }
                  if(puzzle2.x>775 && puzzle2.x<825 && puzzle2.y>215 && puzzle2.y<265){
                    answer2 = true
                    console.log("check2"+answer2)
                      }else{
                        answer2 = false;
                      }
                      if(puzzle1.x>885 && puzzle1.x<925 && puzzle1.y>215 && puzzle1.y<265){
                        answer1 = true
                        console.log("check1"+answer1)
                          }else{
                            answer1 = false;
                          }
                          if(answer1 && answer2 && answer3 && answer4 && answer5 && answer6 && answer7){
                            console.log("all correct")
                          }else{
                            console.log("try again")
                          }
                      

}