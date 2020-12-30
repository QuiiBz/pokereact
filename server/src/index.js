const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.get('/pokemons', (req, res) => {

    const data = fs.readFileSync(path.resolve(__dirname, '..', 'pokedex.json'));
    const json = JSON.parse(data.toString());

    res.json(json);
});

app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`);
});
