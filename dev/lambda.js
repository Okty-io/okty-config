const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const { container, resolver, args } = req.body;

    const functions = require(`../containers/${container}/resolvers.js`);
    const output = functions[resolver](args);

    res.send(output);
});

app.listen(80, () => {
    console.log('Listening on 80');
});
