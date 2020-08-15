//Game//
//Define variables
var character = document.getElementById("character");
var bullet = document.getElementById("bullet");
var counter=0;

//Function for making character jump
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

//Function for counting score, checking for defeat, and ending game
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
    // Stop game if hit
    if(bulletLeft<20 && bulletLeft>-20 && characterTop>=130){
        bullet.style.animation = "none";
    // Display "You Died!" pop-up alert and restart counter
        alert("You Died! Hit enter or OK to try again.");
        counter=0;
    // Allow bullet to keep firing upon game restart
        bullet.style.animation = "bullet 1s infinite linear";
    }
});