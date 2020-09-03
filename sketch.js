var position;
var ball;
var database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    var location = database.ref("ball/position");
    location.on("value",readop,showError);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        rightPosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        rightPosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        rightPosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        rightPosition(0,+1);
    }
    drawSprites();
}

function rightPosition(x,y){
    database.ref("ball/position").update({
        x:ball.x+x,
        y:ball.y+y
    });
}
function readop(data){
  position= data.val();
  ball.x = position.x;
  ball.y = position.y;
}
function showError(){
    console.log("error");
}