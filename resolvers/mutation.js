const {usuarios, proximoId } = require('../data/arrays');
const usuario = require('./usuario');

module.exports = {
    adicionarUsuario(_, {dadosUsuario}) {
        
        const novoUsuario = {
            id: proximoId(),
            ...dadosUsuario
        }

        const usuarioExiste = usuarios.find(usuario => usuario.email === dadosUsuario.email);

        if (usuarioExiste) throw Error("Email cadastrado");

        console.log(novoUsuario);
        usuarios.push(novoUsuario);
        return novoUsuario;
    }
}