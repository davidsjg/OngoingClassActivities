const express = require('express');
const expbs = require('express-handlebars');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models')

var compression = require('compression')

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(compression())

//static director 
app.use(express.static('public'))

//handlebars
app.engine('handlebars', expbs ({ defaultLayout: "main", partialsDir: __dirname + './public/views'}));
app.set('view engine', 'handlebars');

//routes
require('./routes/api-routes.js')(app)
require('./routes/html-routes.js')(app)

//syncing our sequelize models and then starting our express app

db.sequelize.sync({ force:true}).then(() => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`))
})