const { assertNullableType } = require('graphql');
const { perfis,usuarios }  = require('../data/arrays');

module.exports = {
    teste(){
        return new Date();
    },
    usuarios(){
        return usuarios;
    }
}