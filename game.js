//Game//
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
    if(bulletLeft<20 && bulletLeft>-20 && characterTop>=130){
        bullet.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        bullet.style.animation = "bullet 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

// Need function for clearing screen and adding new html