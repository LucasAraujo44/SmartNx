const user = require('./ObjetoE7')
const redutor = (acumulado, valorAtual) => acumulado + valorAtual;

function somarIdades() {
  let age = [];
  user.forEach(User => { age.push(User.idade) })

  console.log(age.reduce(redutor));
}

somarIdades();