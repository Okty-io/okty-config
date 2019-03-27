const resolvers = require('./resolvers.js');

exports.handle = async (event) => {
    if(event.name && resolvers[event.name] instanceof Function){
        return resolvers[event.name](event.value);
    }
};
