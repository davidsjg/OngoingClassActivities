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

  app.post('/api/movies', (req, res) => {
    connection.query(
      'INSERT INTO movies (movie) VALUES (?)',
      [req.body.movie],
      (err, result) => {
        if (err) {
          return res.status(500).end()
        }

        //send back the ID of the new movie
        res.json({ id: result.insertId})
        console.log({ id: result.insertId})
      }
    )
  })


app.delete('/api/movies/:id', (req, res) => {
  connection.query(
    'DELETE FROM movies WHERE id = ?',
    [req.params.id],
    (err, result) => {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// app.put('/api/movies/:id', (req, res) => {
//   connection.query(
//     'UPDATE movies SET movie = ? WHERE id = ?',
//     []  
    
    
//     )
// })

  // Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
console.log(`Server listening on: http://localhost:${PORT}`)
);
