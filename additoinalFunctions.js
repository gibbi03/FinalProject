export function get30SWPeople(params) {
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