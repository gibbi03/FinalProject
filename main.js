//Importing additional functions
//import {redirectToGame} from './functions.js'
//CARDS



//Display  cards
const cardContainer = document.querySelector('#container');

//Get the Data from api and return json objects
function get30SWPeople(params) {
    let people = [];
    const SWPromises = [
        fetch('https://swapi.dev/api/people/?page=1'),
        fetch('https://swapi.dev/api/people/?page=2'),
        fetch('https://swapi.dev/api/people/?page=3')
    ]
   return Promise.all(SWPromises)
    .then(ResponsesArr => {
        return Promise.all(
            ResponsesArr.map(data => data.json())
            ) 
    })
    .then(jsonDataArr => {
        people = jsonDataArr.reduce(
            (acc, data) => [...acc, ...data.results]
            , people)
        return people;
    })
}

//allowed 
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

//set html for cards based on search input filter
function renderCards(cardSearchInput)
{
    // Make search input case insensitive
    cardSearchInput = cardSearchInput.toLowerCase();

    // copying arrayOfPeople so filtering doesn't effect global array
    var localArrayOfPeople = arrayOfPeople.slice();

    // filter local array localArrayOfPeople if input is entered
    if(cardSearchInput.length > 0)
    {
        var filteredArrayOfPeople = localArrayOfPeople.filter(person => person.name.toLowerCase().includes(cardSearchInput));
    }
    else
    {
        var filteredArrayOfPeople = localArrayOfPeople;
    }

    const cardHtmlArray = filteredArrayOfPeople.map(
        person => {
            return cardHtml(person)
        }
    )

    //Creating string out of cardHtmlArray
    const cardHtmlString = cardHtmlArray.join('');

    //Place html string into index.html
    cardContainer.innerHTML = cardHtmlString;

    //allow cards to flip on click    
    var cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener( 'click', 
            function() {
                card.classList.toggle('is-flipped');
            }
        );
    });
}

//create event listener for search submission to render cardHtml
var searchBar = document.getElementById("searchbar");
searchBar.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent page reload on submission
    var cardSearchInput = document.getElementById("searchinput").value; //Define input value as variable
    
//Run renderCards function
    renderCards(cardSearchInput); 
});


//gather star wars people from api and render
get30SWPeople().then(people => {
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

    // Runing funciton to draw all cards when input is empty
    renderCards("");
});
