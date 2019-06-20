let highScore=0;
let counter = 0;
let lives=5;
const points = document.getElementById('Points');
const score= document.getElementById('Score');
const nLives= document.getElementById('Lives')
// Enemies our player must avoid
var Enemy = function(x,y,speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed=speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x=this.x+this.speed*dt;
  if(this.x==0){
    this.speed=100+Math.floor(Math.random()*400);
  }
  if(this.x>500){
    this.x=0;
    this.speed=100+Math.floor(Math.random()*400);
  }
  if (player.x < this.x + 80 &&  player.x + 80 > this.x && player.y < this.y + 60 && 60 + player.y > this.y) {
      numofLives();
      resetPosition();
        counter = 0;// Player reaches water (without bug collision)= 1 point.
        points.innerHTML = counter;
        player.x = 202;
        player.y = 405;
        player.sprite='images/char-pink-girl.png';
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-pink-girl.png';
  }
}
Player.prototype.update = function(dt) {

}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

var enemyLocation = [60, 143, 226];
enemyLocation.map((positionY) => {
  var enemyItem =new Enemy( 0, positionY, 150);
  allEnemies.push(enemyItem);
})
var player = new Player(202, 400);

Player.prototype.handleInput = function(key) {
  if (key == 'left') {
    this.x = this.x - 101;
  }
  if (key == 'right') {
    this.x = this.x + 101;
  }
  if (key == 'up') {
    this.y = this.y - 83;
  }
  if (key == 'down') {
    this.y = this.y + 83;
  }
  if (this.x < 0) {
    this.x = 0;
  }
  if (this.y <-40){
    this.y = 400;
    resetPosition();
            counter = counter + 1; // Increase Score
            points.innerHTML = counter;
              updateScore();
  }
  if (this.x > 400) {
    this.x = 400;
  }
  if (this.y > 400) {
    this.y = 400;
  }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

// updating the score of player
function updateScore(){
  if(highScore<counter)
  {
    highScore=counter;
    score.innerHTML=highScore;
  displayRating();
  }
}
// Reseting the position of player
function resetPosition(){
  if(this.y<-40){
    setTimeOut(()=>{
      this.x=202;
      this.y=405;
    },100)
  }
}

// displaying number of lives of player
function numofLives(){
  lives=lives-1;
  nLives.innerHTML=lives;
  if(lives==0){
    Swal.fire({
              title: 'Game Over....!!',
              html: ' Play again...',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#962F03',
              confirmButtonText: ' Restart'
            }).then(() => {
                document.location.reload();
            });
  }
}

// displaying Score and changing the player
function displayRating(){
  if(highScore==5){
    player.x = 202;
    player.y = 405;
    player.sprite='images/char-boy.png';
  }
    if(highScore==2){
      Swal.fire({
             title: 'Congragulations',
             html: 'HighScore::'+highScore+'',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#962F03',
             confirmButtonText: 'Yes'
           }).then((result) => {
             if (result.value) {
               document.location.reload();
             }
             else {
               window.close();
             }
           });
    }
}
