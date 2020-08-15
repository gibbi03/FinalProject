//import {redirectToGame} from './functions.js'
//CARDS


//Create variable that represents the #container id within the index.html document
const cardContainer = document.querySelector('#container');

//Import function that fetches apis and creates an array of 30 people objects out of the json data
import { get30SWPeople } from './additoinalFunctions.js';

//Allow var arrayOfPeople to exist globally
var arrayOfPeople = null;

//Function that creates html for each person object
function cardHtml(person)
{
    return `
    <div class="scene">
        <div class="card">
            
                <div class="card_face card_face-front">
                    <div id="front-info">
                            <img src="swimg/${person.id}.jpg">
                            <p>${person.name}</p>
                    </div>
                </div>

                <div class="card_face card_face-back">
                    <div id="${person.id}back-info">
                            <div id="back-header">
                                <h1 id="back-h1">${person.name}</h1>
                            </div>
                        <div id="backblock">
                            <div id="back-left">
                                <p>DOB</p>
                                <p>SEX</p>
                                <p>HGT</p>
                                <p>MASS</p>
                                <p>EYES</p>
                                <p>HAIR</p>
                            </div>
                            <div id="back-right">
                                <p>${person.dob}</p>
                                <p>${person.gender}</p>
                                <p>${person.height}</p>
                                <p>${person.mass}</p>
                                <p>${person.eyes}</p>
                                <p>${person.hair}</p>
                            </div>
                        </div>     
                    </div>
                </div>
        </div>
        <input id="playbutton" type="submit" value="Select and Play" class="play${person.id}" onclick="redirectToGame(${person.id})">
    </div> `
}

//Establishing function that creates html for cards based on search input
function renderCards(cardSearchInput)
{
//Make search input case insensitive
    cardSearchInput = cardSearchInput.toLowerCase();

//Creating local arrayOfPeople copy so filtering doesn't effect global array
    var localArrayOfPeople = arrayOfPeople.slice();

//Filter localArrayOfPeople based on input if any input is entered
    if(cardSearchInput.length > 0)
    {
        var filteredArrayOfPeople = localArrayOfPeople.filter(person => person.name.toLowerCase().includes(cardSearchInput));
    }
//Otherwise filteredArrayOfPeople varialbe = the entire localArrayOfPeople
    else
    {
        var filteredArrayOfPeople = localArrayOfPeople;
    }

//create array of html strings for each person object that has been filtered
    const cardHtmlArray = filteredArrayOfPeople.map(
        person => {
            return cardHtml(person)
        }
    )

//Join newly created html strings so that it is one string of html rather than an array of strings
    const cardHtmlString = cardHtmlArray.join('');

//Place newly created html string into index.html
    cardContainer.innerHTML = cardHtmlString;

//define variable that represents the .card class within index.html document   
    var cards = document.querySelectorAll('.card');
//allow cards to flip on click 
    cards.forEach(card => {
        card.addEventListener( 'click', 
            function() {
                card.classList.toggle('is-flipped');
            }
        );
    });
}

//define variable that represents the #searchbar id within index.html document
    var searchBar = document.getElementById("searchbar");
//create event listener for search submission
    searchBar.addEventListener('submit', (event) => {
//prevent page reload on submission
    event.preventDefault();
//Create variable for search input value
    var cardSearchInput = document.getElementById("searchinput").value; 
    
//Render cards based on search input
    renderCards(cardSearchInput); 
});


//Get the Data from api and return json objects
get30SWPeople()
//Gather star wars people from json
.then(people => {
    arrayOfPeople = people.map((person, idx) => {
        return {
            name: person.name,
            gender: person.gender,
            dob: person.birth_year,
            id: idx,
            height: person.height,
            mass: person.mass,
            eyes: person.eye_color,
            hair: person.hair_color,  
        }
    }  
    )

    // Render all cards when input is empty
    renderCards("");
});
