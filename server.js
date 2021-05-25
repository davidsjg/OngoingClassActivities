// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    {name: "pistachio", price: 11, awesomeness: 15 }
];



app.get('/icecreams', (req, res) => {


    res.render('icecreams', {
        allCreams: icecreams
    })
    
})

app.get('/icecream/:name', (req, res) => {

    let iceCream = req.params.name

    let result = icecreams.find(({name}) => name === iceCream)

    res.render('index', result)

})




app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
