const express = require('express');
const cors = require('cors');
const app = express();

const containersRouter = require('./files/containers');
const templatesRouter = require('./files/templates');

app.use(cors());
app.use('/containers', containersRouter);
app.use('/templates', templatesRouter);

app.listen(80, () => {
    console.log('Listening on 80');
});
