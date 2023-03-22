const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const axios = require('axios');
const config = {
  headers: {
    'User-Agent': 'MeuApp/1.0',
    'Authorization': 'Bearer 8547864014068284',
    'method': 'get',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }
};

app.get('/search/​:query', (req, res) => {
  
  const query = req.params.query;
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`, config)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});