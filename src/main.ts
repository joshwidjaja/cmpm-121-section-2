//purposely bad code so students can fix it - can make it worse

import './style.css'

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const bird = document.getElementById("bird");

const scoreText = document.getElementById("scoreText");
let score = 0;
setText("click to start!");


let isJumping = false;
let gameOver = true;

document.addEventListener('mousedown', () => jump());


setInterval(() => {
    main()
}, 10);

function main()
{
    if(gameOver == false)
    {
        score++;
        setText("Score: " + score);

        checkGameOver();
    }
}


function jump()
{
    if(gameOver === false)
    {
        if(isJumping == false)
        {
            isJumping = true;
            dino?.classList.add("jump");
            setTimeout(removeJump, 500);
        }
    }
    else
    {
        startGame();
    }
    
}


function removeJump()
{
    dino?.classList.remove("jump")
    isJumping = false;
    //mainLoop = mainLoop //bug fix?
}

function removeObstacles()
{
    cactus?.classList.remove("cactusMove")
    bird?.classList.remove("birdMove")
}


function checkGameOver()
{

    if(gameOver == false && dino != null && cactus != null && bird != null)
    {
        //get is dinosaur jumping
        const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

        //get cactus position
        const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        //get bird position
        const birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));

        //get if dino is touching
        const touchingCactus = dinoTop >= 150 && Math.abs(cactusLeft) < 7;
        const touchingBird = dinoTop <= 55 && Math.abs(birdLeft) < 11;

        //detect cactus and bird collision
        if(touchingCactus || touchingBird)
        {
            //end game
            console.log("player died!")
            setText("Final Score: " + score + "! Click To Play Again!")
            gameOver = true;

            //reset player
            removeJump();
            
            //reset cactus
            removeObstacles();
        }
    }
}


function startGame()
{
    console.log("Game started!")
    gameOver = false;
    score = 0;
    cactus?.classList.add("cactusMove");
    bird?.classList.add("birdMove");
}

function setText(s: string)
{
    if(scoreText)
    {
        scoreText.textContent = s;
    }
}
