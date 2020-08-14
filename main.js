//Importing additional functions
//import {redirectToGame} from './functions.js'
//CARDS



//Display 25 cards
const conatainer = document.querySelector('#container');

//Get the Data

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
  get30SWPeople().then(people => {
    console.log(people)
    const arrayOfPeople = people.map((person, idx) => {
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
    console.log(arrayOfPeople)

    function personToHtml(person)
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

    const htmlForCards = arrayOfPeople.map(person => {
        return personToHtml(person)
    }
    ).join('');

    console.log(htmlForCards)

    conatainer.innerHTML = htmlForCards;
    
    var cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener( 'click', function() {
            card.classList.toggle('is-flipped');
                                                    }
        );
    })
  });


//card flip

//Use Data to Create Cards
//.......<div class="card">
//...........<div class="card_front">front</div>
//...........<div class="card_back">back</div>
//.......<div class="card_front">front</div>



//Display the cards on the web page




//Add a new card to the web page

//Accept user input

//take that user input and add it to the page
  