const exphbs = require('express-handlebars')
const express = require('express')
const mysql = require('mysql')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('public'))

// sets up the express app to handle data parsing 
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Colorado23',
    database: 'quotes_db',
})

connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });


app.get('/', (req, res) => {
    connection.query('SELECT * FROM quotes', (err, data) => {
        if (err) {
            return res.status(500).end()
        }

        res.render('index', {quotes: data})
    })
})

//POST NEW QUOTE 
app.post('/api/quotes', (req, res) => {
  connection.query('INSERT INTO quotes (author, quote) VALUES (?, ?)',
  [req.body.author, req.body.quote],
  (err, data) => {
    if (err) {
      return res.status(500).end()
    }

    //send back the id of the new quote 
    res.json({ id: data.insertId})
  })
})

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

//DELETE
// app.delete('/api/quotes/:id', (req, res) => {
//   connnection.query(
//     'DELETE FROM quotes WHERE id = ?',
//     [req.params.id],
//     (err, result) => {
//       if (err) {
//         return res.status(500).end()
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).end()
//       }
//       res.status(200).end()
//     }
//   )
// })

app.delete('/api/quotes/:id', (req, res) => {
  connection.query(
    'DELETE FROM quotes WHERE id = ?',
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