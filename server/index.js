require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mc = require(`./controllers/messages_controller`);
const session = require('express-session');
const port = 1337;

const createInitialSession = require('./middlewares/session');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10000 }
  })
);

app.use(createInitialSession)

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages', mc.update);
app.delete('/api/messages', mc.delete);

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
