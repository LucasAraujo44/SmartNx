const user = require('./ObjetoE7')
function ageUser() {
    user.forEach(user => {
        if (user.idade < 25) console.log(`O usuário, ${user.nome.charAt(0).toUpperCase()
            + user.nome.slice(1)} ${user.sobrenome} possui ${user.idade} anos.`)
    })
}
ageUser();

