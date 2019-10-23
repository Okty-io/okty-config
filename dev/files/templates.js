const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    let files = fs.readdirSync('templates');
    res.send(JSON.stringify(files));
});

router.get('/:id', (req, res) => {
    const path = 'templates/' + req.params.id;
    if (!fs.existsSync(path)) {
        res.status(404).send(null);
        return;
    }

    let file = fs.readFileSync(path);

    res.send(file);
});

module.exports = router;
