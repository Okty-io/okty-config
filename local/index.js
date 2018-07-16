let express = require('express');
let cors = require('cors');
let fs = require('fs');
let app = express();

const configPath = './config/';

app.use(cors());

app.get('/:folder', (req, res) => {
    let files = fs.readdirSync(configPath + req.params.folder);
    res.send(JSON.stringify(files));
});

app.get('/:folder/:file', (req, res) => {
    const path = configPath + req.params.folder + '/' + req.params.file;
    if (!fs.existsSync(path)) {
        res.status(404).send(null);
        return;
    }

    let file = fs.readFileSync(path);

    res.send(JSON.stringify({
        content: Buffer.from(file).toString('base64')
    }));
});

app.listen(3000);