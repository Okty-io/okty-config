const yamlLint = require('yaml-lint');
const fs = require('fs');

let path = './';
if (process.argv[2]) {
    path = process.argv[2] + '/';
}

fs.readdir(path, (error, files) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }

    files.forEach(file => {
        if (fs.lstatSync(path + file).isDirectory()) {
            return;
        }

        yamlLint.lintFile(path + file).then(() => {
            console.log(file + ' is valid');
        }).catch(error => {
            console.error(error);
            process.exit(1);
        });
    });
});

