var database;
var gameState =0;
var playerCount;
var form;
var distance=0;
var player;
var game;
var allPlayers;

function setup(){
  database = firebase.database();
  createCanvas(500,500);
  
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
  if(playerCount===4){
    game.update();
  }
    
  if(gameState===1){
    clear();
    game.play();
  }
   
  
}


