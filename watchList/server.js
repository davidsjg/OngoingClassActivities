const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

//set the port of our application - process.env.port is for heroku
const PORT = process.env.PORT || 8080;

// Middleware setting up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//establishing handlebars homescreen layout default
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//setting up connection with MySQL, establishing what database to use 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Colorado23',
    database: 'moviePlanner_db',
  });

  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });


  //ROUTES 
  app.get('/', (req, res) => {
      connection.query(
          'SELECT * FROM movies;', (err, data) => {
              if (err) {
                  return res.status(500).end()
              }
              
              res.render('index', {movies: data})
          }
      )
  })









  // Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
console.log(`Server listening on: http://localhost:${PORT}`)
);
