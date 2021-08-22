const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    uuid = require('uuid');

const app = express();

// Logging middleware
app.use(morgan('common'));
// Sending static files
app.use(express.static('public'));
// Using body-parser
app.use(bodyParser.json());

// Array of objects with my top ten movies
let topMovies = [{
        Id: '1',
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        year: '1972'
    },
    {
        Id: '2',
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        year: '1994'
    },
    {
        Id: '3',
        mtitle: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: '1994'
    },
    {
        Id: '4',
        title: 'The Good, the Bad and the Ugly',
        director: 'Sergio Leone',
        year: '1966'
    },
    {
        Id: '5',
        title: 'Fight Club',
        director: 'David Fincher',
        year: '1999'
    },
    {
        Id: '6',
        title: 'Gran Torino',
        director: 'Clint Eastwood',
        year: '2008'
    },
    {
        Id: '7',
        title: 'Braveheart',
        director: 'Mel Gibson',
        year: '1995'
    },
    {
        Id: '8',
        title: 'Star Wars',
        director: 'George Lucas',
        year: '1977'
    },
    {
        Id: '9',
        title: 'Good Will Hunting',
        director: 'Gus Van Sant',
        year: '1997'
    },
    {
        Id: '10',
        title: 'Apocalypse Now',
        director: 'Francis Ford Coppola',
        year: '1979'
    }
];

//GET requests of all movies
app.get('/movies', (req, res) => {
    res.json(topMovies);
});

// Return a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to myFlix Database');
});

// GET data about a single movie by its title
app.get('/movies/:title', (req, res) => {
    res.json(topMovies.find((movie) => {
        return movie.title === req.params.title
    }));
});

// Adds a new movie
app.post('/movies', (req, res) => {
    let newMovie = req.body;

    if (!newMovie.title) {
        const message = 'Missing movie title in request body';
        res.status(400).send(message);
    } else {
        newMovie.id = uuid.v4();
        topMovies.push(newMovie);
        res.status(201).send(newMovie);
    }
});

// Delete a movie from the list by ID
app.delete('/movies/:id', (req, res) => {
    let movie = topMovies.find((movie) => {
        return movie.id === req.params.id
    });

    if (movie) {
        topMovies = topMovies.filter((obj) => { return obj.id !== req.params.id });
        res.status(201).send('Movie with the ID of ' + req.params.id + ' was deleted.');
    } else {
        res.status(404).send(`Movie with the id ${req.params.id} was not found.`);
    }
});


// Update the year of a movie by its director
app.put('/movies/:title/:director', (req, res) => {
    let movie = topMovies.find((movie) => {
        return movie.title = req.params.title
    });
    if (movie) {
        movie.director = parseInt(req.params.director);
        res.status(201).send(`Movie ${req.params.title} was assigned a director of ${req.params.director}`);
    } else {
        res.status(404).send(`Movie wit the title ${req.params.title} was not found.`);
    }
});

// Get data documentation page
app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
});


// Error messages
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// listen for requests
app.listen(5500, () => {
    console.log('Your app is listening on port 5500.');
});