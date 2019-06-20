# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
## Downloading and extracting  the Project
  - Download  [Classical-Arcade-Game](https://github.com/udacity/frontend-nanodegree-arcade-game) Project in the   form Zip files
  - After downloading the project extract the file
  - It contains  the following file
    - CSS folder
        * it consist of style.css which makeup the index.html
    - images
        * Consists of images used in game and the Used resources
    - js
        * `app.js`  
              - contains javascript code that handles game functionality
        * `engine.js`
               - contains game loop functionality
	             - draws the initial game board on the screen,
	             - calls update, render methods on player and enemy objects
        * `resources.js`
               -  it is a simple image loading utility
        * `index.html`
               - it is root file to all files in arcade game folder
        * `README.md`
                - It explains the  Overall description of project
## Below functions are used to work the game
 - `Enemy function`
      * Assigning the instances of x, y, images( bugs) to canvas
      * `update function`
          - here updating the enemies positions and speed of enemies (bug)
 - ` Player`
      * In this class a constructor is calling to assign the position of a player
 - `handleInput`
      * Here all inputs are handled by using key values('up', 'down', 'left', 'right')
      * According to inputs player moves in their appropiate directions
 - `updateScore`
      * Here updating the score of the player
 - `resetPosition`
      * When player touches the water and then come automatically player comes to original position
 - `numofLives`
      * displaying the lives of player
      * when player touches the bugs lives will decrease
 - `displayRating`
      * To display the popup message when player complete the game
## How to play
    * Open the `index.html` file in your browser.
    * Use arrow keys to move up, down, left, right.
    * Try to escape from bugs.
    * Colliding with bugs causes your life and score to reduce by 1
    * Try to reach the water Side to win the game
    * If you use all the lives, game is lost!
