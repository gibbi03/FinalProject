
//Function for rewriting html to player specific html
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
    <h1 id="gameh1">CLICK THE SCREEN TO JUMP!</h1>
        <div class="game">
            <img id="character" src="swimg/${playerId}.jpg">
            <div id="bullet"></div>
        </div>
    </body>
    <script type="text/javascript" src="game.js"></script>
    </html>
    `;

    document.write(gamepage);
} 