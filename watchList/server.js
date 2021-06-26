const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

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



  app.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM movies',
        (err, data) => {
            if (err) {
                return res.status(500).end()
            }
        res.render('index', {movies: data})
        })
  })

  app.post('/api/movies', (req, res) => {
      connection.query(
          'INSERT INTO movies (movie) VALUES (?)',
          [req.body.movie],
          (err, result) => {
              if (err) {
                  return res.status(500).end()
              }
          res.json({ id: result.insertId})
          console.log({ id: result.insertID})
           }
      )
  })