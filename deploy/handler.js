const resolvers = require('./resolvers.js');

exports.handle = async (event) => {
    if(event.name){
        return resolvers[event.name](event.value);
    }
};
