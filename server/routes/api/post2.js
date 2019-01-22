const express = require('express');
const posts2 = express.Router();

const emberJSON = {
    "post1": [{
      "id": 5,
      "firstName": "Zaphod",
      "lastName": "Beeblebrox",
      "occupation": "President"
    },{
      "id": 6,
      "firstName": "Zaphod6",
      "lastName": "Beeblebrox6",
      "occupation": "President6"
    }]
  }

posts2.get('/', (req, res) => res.json(emberJSON))


module.exports = posts2;