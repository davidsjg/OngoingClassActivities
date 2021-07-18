const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;
const db =require("./models")

var compression = require('compression')

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, '/public')));
app.use(compression())

const path = require('path');

// app.engine('handlebars', exphbs ({ defaultLayout: "main"}));
// app.set('view engine', 'handlebars');

var hbs = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs",
  helpers: {
    section: function(name, options) { 
      if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this); 
        return null;
      }
  }    
});
app.engine('hbs', hbs.engine);
app.set('view engine', '.hbs');

// add the filepath to our controller where the / is
const HTMLrouter = require("./routes/html-routes");
// app.use(router);
HTMLrouter(app);

const APIrouter = require("./routes/api-routes");
APIrouter(app);

db.sequelize.sync()
.then(function () {
  app.listen(PORT, function () {
    console.log("App now listening on port:", PORT);
  });
});