const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.static(path.join(__dirname, '/')));
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
      connection.query('SELECT * FROM movies;', (err, data) => {
          if (err) {
              return res.status(500).end()
          }

          res.render('index', {movies: data})
      })
  })


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
