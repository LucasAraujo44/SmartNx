function argumentos() {
    var somaArgumentos = '';
    [].slice.call(arguments, 0).forEach(function (result) {
        somaArgumentos += ' '.concat(result);
    })
    console.log(somaArgumentos)
}
argumentos('Olá', 'Lucas', 'Araujo')
