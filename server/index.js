const express = require('express');
const bodyParser = require('body-parser');
const mc = require( `./controllers/messages_controller` );
const port = 1337;

const app = express();

app.use( bodyParser.json() );
app.use( express.static( `${__dirname}/../build` ) );

app.post( "/api/messages", mc.create );
app.get( "/api/messages", mc.read );
app.put( "/api/messages", mc.update );
app.delete( "/api/messages", mc.delete );


app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );