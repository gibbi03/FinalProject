
//CARDS



//Display 25 cards
const conatainer = document.querySelector('#container');

//Get the Data
/*const getGroup1 = () => {
    fetch('http://swapi.dev/api/people/')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            const people = data.results;
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

            const htmlForCards = arrayOfPeople.map(person => {
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
                                        <p>WGT</p>
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
            </div> `
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
        }
        )
        
}


getGroup1();*/

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
            <input class="play" type="submit" value="Select and Play" id="play${person.id}">
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

  get30SWPeople();

  const newCardForm = document.querySelector('#newCardForm');

  newCardForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(newCardForm);

    let newCardObj = new Object();

    for(let pair of formData.entries()) {
        console.log(pair)

        newCardObj[pair[0]] = pair[1]
    }

    
    const newCardHTML = `
    <div class="scene">
        <div class="card">
            
                <div class="card_face card_face-front">
                    <div id="front-info">
                            <img src="swimg/starwars.jpg">
                            <p>${newCardObj.name}</p>
                    </div>
                </div>

                <div class="card_face card_face-back">
                    <div id="back-info">
                            <div id="back-header">
                                <h1 id="back-h1">${newCardObj.name}</h1>
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
                                <p>${newCardObj.DOB}</p>
                                <p>${newCardObj.SEX}</p>
                                <p>${newCardObj.HGT}</p>
                                <p>${newCardObj.MASS}</p>
                                <p>${newCardObj.EYES}</p>
                                <p>${newCardObj.HAIR}</p>
                            </div>
                        </div>     
                    </div>
                </div>

        </div>
    </div> `

    /*const sceneDiv = document.createElement('div');
    sceneDiv.className('scene');

        const cardFrontDiv = document.createElement('div');
        cardFaceDiv.className('card_face card_face-front');

            const frontInfoDiv = document.createElement('div');
            frontInfoDiv.id('front-info');
                
                const img = document.createElement('img');
                const fp = document.createElement('p');


        const cardBackDiv = document.createElement('div');
        cardBackDiv.className('card_face card_face-back');

            const backInfoDiv = document.createElement('div');
            backInfoDiv.id('back-info');

                const divHeader = document.createElement('div');
                divHeader.id('back-header');

                    const backH1 = document.createElement('h1');
                    backH1.id('back-h1');

                const backBlockDiv = document.createElement('div');
                backBlockDiv.id('back-block');

                    const backLeftDiv = document.createElement('div');
                    backLeftDiv.id('back-left');

                        const lp1 = document.createElement('p');
                        const lp2 = document.createElement('p');
                        const lp3 = document.createElement('p');
                        const lp4 = document.createElement('p');
                        const lp5 = document.createElement('p');
                        const lp6 = document.createElement('p');
                    
                    const backRightDiv = document.createElement('div');
                    backRightDiv.id('back-right');
    
                        const rp1 = document.createElement('p');
                        const rp2 = document.createElement('p');
                        const rp3 = document.createElement('p');
                        const rp4 = document.createElement('p');
                        const rp5 = document.createElement('p');
                        const rp6 = document.createElement('p');*/

    conatainer.innerHTML += newCardHTML;
    var cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener( 'click', function() {
            card.classList.toggle('is-flipped');
                                                    }
        );
    })
  })


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
  