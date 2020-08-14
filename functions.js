
//Function for redirecting to player specific html
function redirectToGame(playerId){
    const gamepage = `
    <!DOCTYPE html>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500&display=swap" rel="stylesheet">
    <html lang="en" onclick="jump()">
    <head>
        <meta charset="UTF-8">
        <title>Star Wars Bullet Jump</title>
        <link rel="stylesheet" href="gamestyle.css">
    </head>
    <body>
    <h1 id="gameh1">Refresh the page to select a new character!</h1>
        <div class="game">
            <img id="character" src="swimg/${playerId}.jpg">
            <div id="bullet"></div>
        </div>
        <p> <span id="scoreSpan"></span></p>
    </body>
    <script type="text/javascript" src="game.js"></script>
    </html>
    `;

    document.write(gamepage);

    //Function for making character jump
    /*function jump(){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },300);
    }

    document.getElementById("gamediv").addEventListener("click", jump)

    //Game//
    var character = document.getElementById("character");
    var bullet = document.getElementById("bullet");
    var counter=0;

    //Function for counting score, checking for defeat, and ending game
    var checkDead = setInterval(function() {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
        if(bulletLeft<20 && bulletLeft>-20 && characterTop>=130){
            bullet.style.animation = "none";
            alert("Game Over. score: "+Math.floor(counter/100));
            counter=0;
            bullet.style.animation = "bullet 1s infinite linear";
        }else{
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
    }, 10);*/
} 



//export {redirectToGame}