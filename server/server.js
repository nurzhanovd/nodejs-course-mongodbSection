const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require("./db/mongoose");
const {Todo}   = require('./models/todo');
const {User}   = require('./models/user');

const app = express();

app.use(bodyParser.json());
app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});







app.listen(3030, () => {
  console.log("Started at 3030 port");
});
