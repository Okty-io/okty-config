const fs = require('fs');
const Storage = require('@google-cloud/storage');

const config = {
    apiKey: process.env.AWS_ACCESS_KEY_ID,
    storageBucket: 'okty-7e60c.appspot.com',
    projectId: 'okty-7e60c'
};

const storage = new Storage(config);

const path = 'containers/';

// getLocalFiles(path);
getRemoteFiles(path);

function getLocalFiles(folder) {
    const files = [];

    fs.readdirSync(folder).forEach((filename) => {
        const path = folder + filename;

        if (!fs.lstatSync(path).isDirectory()) {
            files.push(path);
        }
    });

    return files;
}

function getRemoteFiles(folder) {
    const files = [];

    storage.bucket(config.storageBucket).getFiles({prefix: folder}, (error, files) => {
        console.log(error);
    });

    console.log(files);

    return files;
}
