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

// Array of objects with my top ten 1980's movies
let topMovies = [{
        id: '1',
        title: 'Heathers',
        director: 'Micheal Lehmann',
        year: '1988'
    },
    {
        id: '2',
        title: 'The Goonies',
        director: 'Richard Donner',
        year: '1985'
    },
    {
        id: '3',
        title: 'Field of Dreams',
        director: 'Phil Alden Robinson',
        year: '1989'
    },
    {
        id: '4',
        title: 'Die Hard',
        director: 'John McTiernan',
        year: '1988'
    },
    {
        id: '5',
        title: 'Top Gun',
        director: 'Tony Scott',
        year: '1986'
    },
    {
        id: '6',
        title: 'Dead Poets Society',
        director: 'Peter Weir',
        year: '2008'
    },
    {
        id: '7',
        title: 'Purple Rain',
        director: 'Albert Magnoli',
        year: '1984'
    },
    {
        id: '8',
        title: 'E.T.',
        director: 'Steven Spielberg',
        year: '1987'
    },
    {
        id: '9',
        title: 'Indiana Jones and the Raiders of the Lost Ark',
        director: 'Steven Spielberg',
        year: '1981'
    },
    {
        id: '10',
        title: 'Weird Science',
        director: 'John Hughes',
        year: '1985'
    },
    {
        id: '11',
        title: 'Back to the Future',
        director: 'Robert Zemeckis',
        year: '1985'
    },
    {
        id: '12',
        title: 'The Labyrinth',
        director: 'Jim Henson',
        year: '1986'
    },
    {
        id: '13',
        title: 'Beatlejuice',
        director: 'Tim Burton',
        year: '1988'
    },
    {
        id: '14',
        title: 'The Shining',
        director: 'Stanley Kubrick',
        year: '1980'
    },
    {
        id: '15',
        title: 'Young Guns',
        director: 'Christopher Cain',
        year: '1980'
    },
    {
        id: '16',
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        director: 'Irvin Kershner',
        year: '1980'
    },
    {
        id: '17',
        title: 'Caddyshack',
        director: 'Harold Ramis',
        year: '1980'
    },
    {
        id: '18',
        title: 'Over the Top',
        director: 'Menahem Golan',
        year: '1987'
    },
    {
        id: '19',
        title: 'The Breakfast Club',
        director: 'John Hughes',
        year: '1985'
    },
    {
        id: '20',
        title: 'Friday the 13th',
        director: 'Sean S. Cunningham',
        year: '1980'
    },
];

// Mongo Database

//  MOVIE 1 "Heathers" //
let movie1 = {
    Title: "Heathers",
    Description: "A dark comedy about a girl named Veronica who tries to fit in a school with a group of girls all named Heather.",
    Genre: {
        Name: "Comedy",
        Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
    },
    Director: {
        Name: "Michael Lehmann",
        Bio: "Michael Lehmann is an American director, producer, and screenwriter.",
        Birth: "1957-03-30"
    },
    ImagePath: "https://www.imdb.com/title/tt0097493/mediaviewer/rm4182624769/?ref_=tt_ov_i",
    Actors: ["Winona Ryder", "Christian Slater", "Shannen Doherty"],
    Year: "1988",
    Rated: "R",
    Featured: true
}
db.movies.insertOne(movie1)

// MOVIE 2 "The Goonies" //
let movie2 = {
    Title: "The Goonies",
    Description: "A group of kids who live in the 'Goon Docks' of Astoria, Oregon, discover an old treasure map that takes them on a an adventure to unearth the lost fortune of One-Eyed Willy, a 17th-century Pirate.",
    Genre: {
        Name: "Adventure",
        Description: "Adventure films typically are set in far away lands taking the characters away from their homes to fullfil a goal and embarking on travels, quests, treasure hunts, heroric journeys, and explorations for the unknown."
    },
    Director: {
        Name: "Richard Donner",
        Bio: "Richard Donner was an American director, and producer.",
        Birth: "1930-04-24",
        Death: "2021-07-05"
    },
    ImagePath: "https://www.imdb.com/title/tt0089218/mediaviewer/rm620367360/?ref_=tt_ov_i",
    Actors: ["Sean Astin", "Josh Brolin", "Jeff Cohen", "Corey Feldman", "Kerri Green"],
    Year: "1985",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie2)

// MOVIE 3 "Field of Dreams" //
let movie3 = {
    Title: "Field of Dreams",
    Description: "An Iowa farmer is inspired by a voice to build a ballfield on his farm. The field attracts ghosts of baseball legends, including Shoeless Joe Jackson and the Chicago Black Sox.",
    Genre: {
        Name: "Drama",
        Description: "Drama is a genre of film that has a serious tone."
    },
    Director: {
        Name: "Phil Alden Robinson",
        Bio: "Phil Alden Robinson is an American director, producer, and screenwriter.",
        Birth: "1950-03-01"
    },
    ImagePath: "https://www.imdb.com/title/tt0097351/mediaviewer/rm1282606080/?ref_=tt_ov_i",
    Actors: ["Kevin Costner", "James Earl Jones", "Ray Liotta"],
    Year: "1989",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie3)

// MOVIE 4 "Die Hard" //
let movie4 = {
    Title: "Die Hard",
    Description: "A NYPD cop tries to save his wife and others from German terrorist during a Christmas party in Los Angeles.",
    Genre: {
        Name: "Action",
        Description: "Action is a genre of film that has a fast moving plot, usually containing violence and a heroic protagonist."
    },
    Director: {
        Name: "John McTiernan",
        Bio: "John McTiernan is an American producer and director.",
        Birth: "1950-01-08"
    },
    ImagePath: "https://www.imdb.com/title/tt0095016/mediaviewer/rm270892032/?ref_=tt_ov_i",
    Actors: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
    Year: "1988",
    Rated: "R",
    Featured: true
}
db.movies.insertOne(movie4)

// MOVIE 5 "Top Gun" //
let movie5 = {
    Title: "Top Gun",
    Description: "A young naval aviator aboard the aricraft carrier USS Enterprise get to train at the Navy\'s Fighter Weapons School in San Diego.",
    Genre: {
        Name: "Action",
        Description: "Action is a genre of film that has a fast moving plot, usually containing violence and a heroic protagonist."
    },
    Director: {
        Name: "Tony Scott",
        Bio: "Tony Scott was an English director and producer.",
        Birth: "1944-06-21",
        Death: "2012-08-09"
    },
    ImagePath: "https://www.imdb.com/title/tt0092099/mediaviewer/rm2145457920/?ref_=tt_ov_i",
    Actors: ["Tom Cruise", "Tim Robbins", "Kelly McGillis", "Val Kilmer"],
    Year: "1986",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie5)

// MOVIE 6 "Dead Poets Society"//
let movie6 = {
    Title: "Dead Poets Society",
    Description: "Set in the 1950s at a elite conservative boarding school, tells the story of an English teacher who inspires his students through teaching poetry.",
    Genre: {
        Name: "Drama",
        Description: "Drama is a genre of film that has a serious tone."
    },
    Director: {
        Name: "Peter Weir",
        Bio: "Peter Weir is an Australian writer, and director.",
        Birth: "1944-08-21"
    },
    ImagePath: "https://www.imdb.com/title/tt0097165/mediaviewer/rm1115750912/?ref_=tt_ov_i",
    Actors: ["Robin Williams", "Robert Sean Leonard", "Ethan Hawke"],
    Year: "1989",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie6)

// MOVIE 7 "Purple Rain"//
let movie7 = {
    Title: "Purple Rain",
    Description: "A young musician, staring Prince, rises out of an abusive home and rival singer to stardom.",
    Genre: {
        Name: "Drama",
        Description: "Drama is a genre of film that has a serious tone."
    },
    Director: {
        Name: "Albert Magnoli",
        Bio: "Albert Magnoli is an American director, producer, editor and screenwriter.",
        Birth: "1954-01-01"
    },
    ImagePath: "https://www.imdb.com/title/tt0087957/mediaviewer/rm2949198592/?ref_=tt_ov_i",
    Actors: ["Prince", "Apollonia Kotero", "Morris Day"],
    Year: "1984",
    Rated: "R",
    Featured: true
}
db.movies.insertOne(movie7)

// MOVIE 8 "E.T."//
let movie8 = {
    Title: "E.T.",
    Description: "A young boy named Elliot, befriends an extraterrestrial.",
    Genre: {
        Name: "Science Fiction",
        Description: "Science ficion is a genre of imaginative and futuristic concepts such as advanced science and technology; such as, extraterrestrial lifeforms, alien worlds, extrassensory perception and time travel."
    },
    Director: {
        Name: "Steven Spielberg",
        Bio: "Steven Spielberg is an American producer, writer, director, actor and stand-up comedian.",
        Birth: "1946-12-18"
    },
    ImagePath: "https://www.imdb.com/title/tt0083866/mediaviewer/rm1993282560/?ref_=tt_ov_i",
    Actors: ["Henry Thomas", "Drew Barrymore", "Peter Coyote"],
    Year: "1982",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie8)

// MOVIE 9 "Indiana Jones and the Raiders of the Lost Ark" //
let movie9 = {
    Title: "Indiana Jones and the Raiders of the Lost Ark",
    Description: "Staring Harrison Ford as an archaeologist competiting with Nazi German forces in 1936 to recover the long-lost Ark of the Covenant, a relic that makes an army invincible.",
    Genre: {
        Name: "Adventure",
        Description: "Adventure films typically are set in far away lands taking the characters away from their homes to fullfil a goal and embarking on travels, quests, treasure hunts, heroric journeys, and explorations for the unknown."
    },
    Director: {
        Name: "Steven Spielberg",
        Bio: "Steven Spielberg is an American producer, writer, director, actor and stand-up comedian.",
        Birth: "1946-12-18"
    },
    ImagePath: "https://www.imdb.com/title/tt0082971/mediaviewer/rm1612744448/?ref_=tt_ov_i",
    Actors: ["Harrison Ford", "Karen Allen", "Paul Freeman"],
    Year: "1981",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie9)

// MOVIE 10 "Weird Science" //
let movie10 = {
    Title: "Weird Science",
    Description: "Nerdy social outcasts are humiliated by senior jocks for swooning over their cheerleader girlfriends. Rejected and disappointed, the two boys create a virtual woman using a computer.",
    Genre: {
        Name: "Adventure",
        Description: "Adventure films typically are set in far away lands taking the characters away from their homes to fullfil a goal and embarking on travels, quests, treasure hunts, heroric journeys, and explorations for the unknown."
    },
    Director: {
        Name: "John Hughes",
        Bio: "John Hughes is an American producer and actor.",
        Birth: "1950-02-18"
    },
    ImagePath: "https://www.imdb.com/title/tt0090305/mediaviewer/rm2376937472/?ref_=tt_ov_i",
    Actors: ["Anthony Michael Hall", "Ilan Mitchell-Smith", "Kelly LeBrock"],
    Year: "1985",
    Rated: "PG-13",
    Featured: true
}
db.movies.insertOne(movie10)

// MOVIE 11 "Back to the Future" //
let movie11 = {
    Title: "Back to the Future",
    Description: "A highschooler named Marty McFly, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his friend, the eccentric scientist Doc Brown.",
    Genre: {
        Name: "Science Fiction",
        Description: "Science ficion is a genre of imaginative and futuristic concepts such as advanced science and technology; such as, extraterrestrial lifeforms, alien worlds, extrassensory perception and time travel."
    },
    Director: {
        Name: "Robert Zemeckis",
        Bio: "Robert Zemeckis is an American director, producer, and screenwriter.",
        Birth: "1951-05-14"
    },
    ImagePath: "https://www.imdb.com/title/tt0088763/mediaviewer/rm554638848/?ref_=tt_ov_i",
    Actors: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    Year: "1985",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie11)

// MOVIE 12 "The Labyrinth" //
let movie12 = {
    Title: "The Labyrinth",
    Description: "A sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby, when her wish for him to be taken away is granted by the Goblin King Jareth, played by David Bowie.",
    Genre: {
        Name: "Fantasy",
        Description: "Fantasy is a genre of film that contains supernatural events, folklore or exotic fantasy."
    },
    Director: {
        Name: "Jim Henson",
        Bio: "Jim Henson was an American producer, writer, director, and puppeteer.",
        Birth: "1936-09-24",
        Death: "1990-05-16"
    },
    ImagePath: "https://www.imdb.com/title/tt0091369/mediaviewer/rm2649548544/?ref_=tt_ov_i",
    Actors: ["David Bowie", "Jennifer Connelly", "Toby Froud"],
    Year: "1986",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie12)

// MOVIE 13 "Beetlejuice" //
let movie13 = {
    Title: "Beetlejuice",
    Description: "A recently deceased couple become ghosts haunting their former home with a maddening poltergeist named Betelgeuse who tries to scare away the new inhabitants.",
    Genre: {
        Name: "Comedy",
        Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
    },
    Director: {
        Name: "Tim Burton",
        Bio: "Tim Burton is an American director, producer, and screenwriter.",
        Birth: "1958-08-25",
    },
    ImagePath: "https://www.imdb.com/title/tt0094721/mediaviewer/rm2212181760/?ref_=tt_ov_i",
    Actors: ["Alec Baldwin", "Geena Davis", "Michael Keaton"],
    Year: "1988",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie13)

// MOVIE 14 "Young Guns" //
let movie14 = {
    Title: "Young Guns",
    Description: "A story of Billy the Kid during the Lincoln County War in New Mexico during 1877-78.",
    Genre: {
        Name: "Western",
        Description: "Western is a genre of film in which the main emphasis is on the American West and often contains cowboys, Indians and settlers set back in the 1880\'s."
    },
    Director: {
        Name: "Christopher Cain",
        Bio: "Christopher Cain is an American, screenwriter and director.",
        Birth: "1943-10-29",
    },
    ImagePath: "https://www.imdb.com/title/tt0096487/mediaviewer/rm2649765632/?ref_=tt_ov_i",
    Actors: ["Emilio Estevez", "Kiefer Sutherland", "Lou Diamond Phillips"],
    Year: "1988",
    Rated: "R",
    Featured: true
}
db.movies.insertOne(movie14)

// MOVIE 15 "Star Wars" //
let movie15 = {
    Title: "Star Wars: Episode V - The Empire Strikes Back",
    Description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader.",
    Genre: {
        Name: "Science Fiction",
        Description: "Science ficion is a genre of imaginative and futuristic concepts such as advanced science and technology; such as, extraterrestrial lifeforms, alien worlds, extrassensory perception and time travel."
    },
    Director: {
        Name: "Irvin Kershner",
        Bio: "Irvin Kershner was an American director.",
        Birth: "1923-04-29",
        Death: "2010-11-27"
    },
    ImagePath: "https://www.imdb.com/title/tt0080684/mediaviewer/rm3114097664/?ref_=tt_ov_i",
    Actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    Year: "1980",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie15)

// MOVIE 16 "Caddyshack" //
let movie16 = {
    Title: "Caddyshack",
    Description: "A golf course has to deal with a brash new member and a destructive dancing gopher.",
    Genre: {
        Name: "Comedy",
        Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
    },
    Director: {
        Name: "Harold Ramis",
        Bio: "Harold Ramis was an American actor, comedian, director and screenwriter.",
        Birth: "1944-11-21",
        Death: "2014-02-24"
    },
    ImagePath: "https://www.imdb.com/title/tt0080487/mediaviewer/rm3557231616/?ref_=tt_ov_i",
    Actors: ["Chevy Chase", "Rodney Dangerfield", "Bill Murray"],
    Year: "1980",
    Rated: "R",
    Featured: true
}
db.movies.insertOne(movie16)

// MOVIE 17 "Over the Top" //
let movie17 = {
    Title: "Over the Top",
    Description: "A tough trucker played by Sylvester Stallone, is determined to win back his son and triumph at the world arm wrestly championships.",
    Genre: {
        Name: "Comedy",
        Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
    },
    Director: {
        Name: "Menahem Golan",
        Bio: "Menahem Golan was an Israeli director, producer, and screenwriter.",
        Birth: "1941-12-31",
        Death: "2014-08-08"
    },
    ImagePath: "https://www.imdb.com/title/tt0093692/mediaviewer/rm1212262145/?ref_=tt_ov_i",
    Actors: ["Sylvester Stallone", "Robert Loggia", "Susan Blakely"],
    Year: "1987",
    Rated: "PG",
    Featured: true
}
db.movies.insertOne(movie17)

// MOVIE 18 "The Breakfast Club" //
let movie18 = {
    Title: "The Breakfast Club",
    Description: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
    Genre: {
        Name: "Drama",
        Description: "Drama is a genre of film that has a serious tone."
    },
    Director: {
        Name: "John Huges",
        Bio: "John Hughes is an American producer and actor.",
        Birth: "1950-02-18"
    },
    ImagePath: "https://www.imdb.com/title/tt0088847/mediaviewer/rm2988051200/?ref_=tt_ov_i",
    Actors: ["Emilio Estevez", "Judd Nelson", "Molly Ringwald"],
    Year: "1985",
    Rated: "R",
    Featured: true
}
db.movies.insertOne(movie18)

// MOVIE 19 "Friday the 13th" //
let movie19 = {
    Title: "Friday the 13th",
    Description: "A group of camp counselors are stalked and murdered by an unkown assailant while trying to reopen a summer camp which was the site of a child\'s drowning and grisly murder years before.",
    Genre: {
        Name: "Horror",
        Description: "Horror is a genre of film which aims to elicit fear in its audience for entertainment."
    },
    Director: {
        Name: "Sean S. Cunningham",
        Bio: "Sean S. Cunningham is an American director, producer, and screenwriter.",
        Birth: "1940-12-01"
    },
    ImagePath: "https://www.imdb.com/title/tt0080761/mediaviewer/rm2161907200/?ref_=tt_ov_i",
    Actors: ["Betsy Palmer", "Adrienne King", "Jeannine Taylor"],
    Year: "1980",
    Rated: "R",
    Featured: true
}
db.movies.insertOne(movie19)

// MOVIE 20 "The Shining" //
let movie20 = {
    Title: "The Shining",
    Description: "A family stays at an isolated hotel for the winter where a sinister presence influences the father into violence, while his son sees horrific beings from both the past and future. Based on Stephen King\'s book, 'The Shining' while staying at the Stanley Hotel in Colorado in the fall of 1974 with his family. The hotel in 1974 was deserted and empty during his months stay while writing 'The Shining'.",
    Genre: {
        Name: "Horror",
        Description: "Horror is a genre of film which aims to elicit fear in its audience for entertainment."
    },
    Director: {
        Name: "Stanley Kubrick",
        Bio: "Stanley Kubrick was an American director, screenwriter, photographer and producer.",
        Birth: "1928-07-26",
        Death: "1999-03-07"
    },
    ImagePath: "https://www.imdb.com/title/tt0081505/mediaviewer/rm3901111552/?ref_=tt_ov_i",
    Actors: ["Jack Nicholson", "Shelly Duvall", "Danny Lloyd"],
    Year: "1980",
    Rated: "R",
    Featured: true
}
db.movies.insertOne(movie20)


// User 1 //
let user1 = {
    Username: "joedirt",
    Password: "iknowmy123s",
    Email: "realjoedirtn@gmail.com",
    Birthday: "1971-05-01",
    FavoriteMovies: [],
}
db.users.insertOne(user1)

// User 2 //
let user2 = {
    Username: "bubbabass",
    Password: "*bassfish4life",
    Email: "bubbabassfish.net",
    Birthday: "1999-09-01",
    FavoriteMovies: [],
}
db.users.insertOne(user2)

// User 3 //
let user3 = {
    Username: "bobross",
    Password: "1happytree!",
    Email: "happytrees@gmail.com",
    Birthday: "1950-01-01",
    FavoriteMovies: [],
}
db.users.insertOne(user3)

// User 4 //
let user4 = {
    Username: "sheshed",
    Password: "buildmeashed!",
    Email: "iliveinashed@gmail.com",
    Birthday: "1995-01-01",
    FavoriteMovies: [],
}
db.users.insertOne(user4)

// User 5 //
let user5 = {
    Username: "girlpower",
    Password: "Beyoncemoments!",
    Email: "girlpower@gmail.com",
    Birthday: "1995-01-01",
    FavoriteMovies: [],
}
db.users.insertOne(user5)

// Adding movie for User 1 // 
db.users.update({ Username: "joedirt" }, { $push: { FavoriteMovies: ObjectId("612e9fdf486ae53ee212b4bd") } })

// Adding movie for User 2 // 
db.users.update({ Username: "bubbabass" }, { $push: { FavoriteMovies: ObjectId("612e9fa5486ae53ee212b4b8") } })

// Adding movie for User 3 // 
db.users.update({ Username: "bobross" }, { $push: { FavoriteMovies: ObjectId("612e9f59486ae53ee212b4b4") } })

// Adding movie for User 4 // 
db.users.update({ Username: "sheshed" }, { $push: { FavoriteMovies: ObjectId("612e9edb486ae53ee212b4ab") } })


// Adding movie for User 5 // 
db.users.update({ Username: "girlpower" }, { $push: { FavoriteMovies: ObjectId("612e9f38486ae53ee212b4b1") } })

// Movies Update
db.movies.update({ _id: ObjectId("612e9fec486ae53ee212b4be") }, { $set: { Description: "A family stays at an isolated hotel for the winter where a sinister presence influences the father into violence, while his son sees horrific beings from both the past and future. Based on Stephen King's book, 'The Shining' while staying at the Stanley Hotel in Colorado in the fall of 1974 with his family." } })

// Updating Director Bio
db.movies.update({ "Director.Name": "Steven Spielberg" }, {
        $set: {
            Director: {
                Name: "Steven Spielberg",
                Bio: "Steven Spielberg is an American producer, writer, director, actor. He's one of the world\'s most influential film makers of all time",
                Birth: "1946-12-18"
            }
        }
    })
    // MOVIE 8 "E.T."//
db.movies.update({ _id: ObjectId("612e9f43486ae53ee212b4b2") }, {
    $set: {
        "Director": {
            "Name": "Steven Spielberg",
            "Bio": "Steven Spielberg is an American producer, writer, director, actor. He's one of the world's most influential film makers of all time",
            "Birth": "1946-12-18"
        }
    }
})

db.users.update({ Username: "joedirt" }, { $push: { FavoriteMovies: ObjectId("612e9f8e486ae53ee212b4b6") } })

















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
        res.status(201).send('Movie with the id of ' + req.params.id + ' was deleted.');
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