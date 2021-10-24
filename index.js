const express = require('express'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    Models = require('./models.js'),
    bodyParser = require('body-parser'),
    //dotenv = require('dotenv'),
    //{ check, validationResult } = require('express-validator');
    //dotenv.config();

    const app = express(),
        Movies = Models.Movie,
        Users = Models.User,
        Genres = Models.Genre,
        Directors = Models.Director,
        cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use(express.static('public'));

let allowedOrigins = [
    'http://localhost:8080',
    'http://testsite.com',
    'http://localhost:5501',
    'https://mysterious-plains-19334.herokuapp.com/movies',
    'http://localhost:1234'
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            let message = 'The CORS policy for this application doesn’t allow access from origin ' +
                origin;
            return callback(new Error(message), false);
        }
        return callback(null, true);
    }
}));

// ------- LOCALHOST CONNECTION STRING for testing purposes ------ //
//mongoose.connect('mongodb://localhost:27017/myFlixDB', {useNewUrlParser: true, useUnifiedTopology: true }); //

mongoose.connect(process.env.CONNECTION_URI || 'mongodb://localhost:27017/myFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });

let auth = require('./auth')(app); //This ensures that Express is available in “auth.js” file as well.

const passport = require('passport');
require('./passport');


// Return a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to myFlix Database!');
});

// GET a list of all movies
app.get('/movies', (req, res) => {
    Movies.find()
        .then(function(movies) {
            res.status(201).json(movies);
        })
        .catch(function(error) {
            console.error(error);
            res.status(500).send("Error: " + error);
        });
});

// GET a data about a single movie by its title
app.get('/movies/:Title', (req, res) => {
    Movies.findOne({ Title: req.params.Title })
        .then((movie) => {
            res.json(movie);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error: ' + err);
        });
});

//Get a list of all directors
app.get('/directors', passport.authenticate('jwt', { session: false }), (req, res) => {
    Directors.find()
        .then(directors => {
            res.status(201).json(directors);
        })
        .catch(error => {
            console.error(err);
            res.status(500).send("Error: " + err);
        });
});

// GET a data about a single director by name
app.get('/directors/:Name', passport.authenticate('jwt', { session: false }), (req, res) => {
    Directors.findOne({ Name: req.params.Name })
        .then((director) => {
            res.json(director);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error: ' + err);
        });
});

//Get a list of all genres
app.get('/genres', (req, res) => {
    Genres.find()
        .then(genres => {
            res.status(201).json(genres);
        })
        .catch(error => {
            console.error(err);
            res.status(500).send("Error: " + err);
        });
});

// GET a data about a genre
app.get('/genres/:Name', (req, res) => {
    Genres.findOne({ Name: req.params.Name })
        .then((genre) => {
            res.json(genre);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error: ' + err);
        });
});

//Add a user
app.post('/users', [
    check('Username', 'Username is required').isLength({ min: 5 }),
    check('Username', 'Username contains non alphanumeric characters - not allowed.').isAlphanumeric(),
    check('Password', 'Password is required').not().isEmpty(),
    check('Email', 'Email does not appear to be valid').isEmail()
], (req, res) => {

    // check the validation object for errors
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    let hashedPassword = Users.hashPassword(req.body.Password);

    Users.findOne({ Username: req.body.Username }) // Search to see if a user with the requested username already exists
        .then((user) => {
            if (user) {
                //If the user is found, send a response that it already exists
                return res.status(400).send(req.body.Username + ' already exists');
            } else {
                Users.create({
                        Username: req.body.Username,
                        Password: hashedPassword,
                        Email: req.body.Email,
                        Birthday: req.body.Birthday
                    })
                    .then((user) => { res.status(201).json(user) })
                    .catch((error) => {
                        console.error(error);
                        res.status(500).send('Error: ' + error);
                    });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error: ' + error);
        });
});

// Delete a user by username
app.delete('/users/:Username',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Users.findOneAndRemove({ Username: req.params.Username })
            .then((user) => {
                if (!user) {
                    res.status(400).send(req.params.Username + ' was not found');
                } else {
                    res.status(200).send(req.params.Username + ' was deleted.');
                }
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Error: ' + err);
            });
    });

// Get all users
app.get('/users', (req, res) => {
    Users.find()
        .then((users) => {
            res.status(201).json(users);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error: ' + err);
        });
});


// Get a user by username
app.get('/users/:Username', (req, res) => {
    Users.findOne({ Username: req.params.Username })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error: ' + err);
        });
});

// Update user info
app.put('/users/:Username', (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username }, {
            $set: {
                Username: req.body.Username,
                Password: req.body.Password,
                Email: req.body.Email,
                Birthday: req.body.Birthday
            }
        }, { new: true }, // This line makes sure that the updated document is returned
        (err, updatedUser) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error: ' + err);
            } else {
                res.json(updatedUser);
            }
        });
});

// Add a movie to a user's list of favorites
app.post('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username }, {
            $push: { FavoriteMovies: req.params.MovieID }
        }, { new: true }, // This line makes sure that the updated document is returned
        (err, updatedUser) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error: ' + err);
            } else {
                res.json(updatedUser);
            }
        });
});


//Remove a movie to a user's list of favorites
app.delete('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username }, {
            $pull: { FavoriteMovies: req.params.MovieID }
        }, { new: true }, // This line makes sure that the updated document is returned
        (err, updatedUser) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error: ' + err);
            } else {
                res.json(updatedUser);
            }
        }
    );
});

// Delete a movie 
app.delete('/movies/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    let movie = topMovies.find((movie) => {
        return movie.id === req.params.id
    });
    if (movie) {
        topMovies = topMovies.filter((obj) => { return obj.id !== req.params.id });
        res.status(201).send('Movie with the id of ' + req.params.id + ' was deleted.');
    } else {
        res.status(404).send(`Movie with the id ${req.params.id} was not found.`);
    }
});

// Update the year of a movie by its director
app.put('/movies/:title/:director', passport.authenticate('jwt', { session: false }), (req, res) => {
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
const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
    console.log('This app is listening on Port ' + port);
});