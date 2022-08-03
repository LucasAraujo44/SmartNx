const user = require('./ObjetoE7')
function imprimirElementos() {
    user.forEach(user => {
        if (user.idade < 30) console.log(user)
    })
}

imprimirElementos();  
