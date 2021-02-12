const express = require('express');
const app = express();
const port = 3000;
let pokemons = require('./assets/pokemons.json');

app.use(express.json());

// Define a route
// GET http://localhost:3000 
app.get('/', (req, res) => {
    //write the logic for this route
    //we have access to the request and the response

    //we want to return a 'hello world' to the user

    res.send('Hello World!');
});

//we want to get the current date and time
app.get('/time', (req, res) => {
    res.json({ now: new Date() });
});

//We want to get our pokemons from the first generation, we have them in a json-file at the moment
app.get('/api/pokemons', (req, res) => {
    res.json(pokemons);
});

//localhost:3000/api/pokemons:id
//Now I am expecting to get a pokemon with a specific id
app.get('/api/pokemons/:id', (req, res) => {
    const pokemon = pokemons.find(pokemon => pokemon.id === req.params.id);
    res.json(pokemon);
});

app.post('/api/pokemons', (req, res) => {
    const newPokemon = {...req.body, id: Math.random()};
    pokemons.push(newPokemon);
    res.json({ newPokemon })
})

// fetch("http://localhost:3000/api/pokemons", { method: "POST", body: JSON.stringify({ name: "Oddish" }), 
// headers: {'Content-Type': 'application/json'}})
//HEJHEJHEJ

//Exercises

// 1. GET /pokemons- this should respond with a list of Pokemons.

// 2. POST /pokemons- this route should accept form data and add it to the Pokemon list.

// 3. GET /pokemons/:id - this route should display a single Pokemon's name

// 4. DELETE /pokemons/:id - this route should allow you to delete a specific Pokemon from the array.

// 5. PATCH /pokemons/:id - this route should accept edits to existing Pokemons.

// 6. Write the logic for the query parameter ( /api/pokemons?search=Pikachu ), so that this route's 
// response is a match on a Pokemon's name


//gotta add a listener :)))))))
app.listen(port, () => {
    console.log(`Pokemon app listening on port ${port}`);
});
