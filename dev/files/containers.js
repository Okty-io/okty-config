const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    let files = fs.readdirSync('containers');
    res.send(JSON.stringify(files));
});

router.get('/:id/:file', (req, res) => {
    const path = 'containers/' + req.params.id + '/' + req.params.file;
    if (!fs.existsSync(path)) {
        res.status(404).send(null);
        return;
    }

    let file = fs.readFileSync(path);

    res.send(file);
});

router.get('/:id/sources/:file', (req, res) => {
    const path = 'containers/' + req.params.id + '/sources/' + req.params.file;
    if (!fs.existsSync(path)) {
        res.status(404).send(null);
        return;
    }

    let file = fs.readFileSync(path);

    res.send(file);
});

module.exports = router;
