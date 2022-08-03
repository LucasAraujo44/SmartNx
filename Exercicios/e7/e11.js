const user = require('./ObjetoE7')
function ordenarElementos() {
    user.sort(function (antecessor, sucessor) {
        if (antecessor.idade > sucessor.idade && sucessor.id > antecessor.id) {
            return 1;
        }
        else {
            return -1;
        }
    });

    console.log(user);
}
ordenarElementos();  
