const path = require('path');
const routes = require('./controllers');
const express = require("express")
const session = require("express-session")
const sequelize =""
const PORT = 3000
const app = express()

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

app.use(session(sess));
app.use('/',routes)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });