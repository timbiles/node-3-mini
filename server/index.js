const express = require('express');
const bodyParser = require('body-parser');
const mc = require( `./controllers/messages_controller` );
const session = require('express-session');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
app.use( express.static( `${__dirname}/../build` ) );
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 10000,
  },
}));

app.post( "/api/messages", mc.create );
app.get( "/api/messages", mc.read );
app.put( "/api/messages", mc.update );
app.delete( "/api/messages", mc.delete );

const port = process.env.PORT || 3000
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );