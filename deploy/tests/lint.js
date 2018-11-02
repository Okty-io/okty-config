const yamlLint = require('yaml-lint');
const fs = require('fs');
const path = require('path');
const containersPath = './containers';
const templatesPath = './templates';

const containers = fs.readdirSync(containersPath);
containers.forEach(container => {
    const files = fs.readdirSync(`${containersPath}/${container}`);
    files.forEach(file => {
        const currentFile = `${containersPath}/${container}/${file}`;
        lintFile(currentFile)
    });
});

const templates = fs.readdirSync(templatesPath);
templates.forEach(template => {
    const currentFile = `${templatesPath}/${template}`;
    lintFile(currentFile);
});

// Utils functions

function lintFile(file) {
    if (fs.lstatSync(file).isDirectory()) {
        return;
    }

    const ext = path.extname(file);
    if (ext !== '.yml' && ext !== '.yaml') {
        return;
    }

    yamlLint.lintFile(file)
        .then(() => console.log(`${file} : Valid`))
        .catch(error => handleLintError(file, error));
}

function handleLintError(file, error) {
    console.error(`${file} : Invalid`);
    console.error(error);
    process.exit(1);
}

