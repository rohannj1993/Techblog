const path = require('path');
const routes = require('./controllers/');
const express = require("express")
const session = require("express-session")
const sequelizeStore = require ("connect-session-sequelize")
const PORT = 3000
const app = express()

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });