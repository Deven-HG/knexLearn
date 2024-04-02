const express = require('express');
const app = express();
const port = 8080;
const knex = require('knex')(require('../knexfile.js')[process.env.NOD_ENV||'development']);

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Application up and running.')
})

app.listen(port, () => {
  console.log('Your knex and express application are running successfully')
})

app.get('/pets', (request, response) => {
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map(pet => pet.name)
      response.status(200).json(petNames);
    })
    .catch(err =>
        res.status(404).json({
          message: 'The data you are looking for could not be found. Please try again.'
        }))
})