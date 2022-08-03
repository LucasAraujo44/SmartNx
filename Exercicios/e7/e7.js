const user = require('./ObjetoE7')
function callUser() {
    user.forEach(pessoa => {
        console.log(`Olá, ${pessoa.nome.charAt(0).toLocaleUpperCase() + pessoa.nome.slice(1)} ${pessoa.sobrenome}!`);
    })
}
callUser();