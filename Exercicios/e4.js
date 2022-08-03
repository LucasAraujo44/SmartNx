function result(stringResult) {
    [...stringResult].forEach(char => {
        if (!isNaN(parseInt(char))) {
            stringResult = stringResult.replace(char, '[removido]');
        }
    });
    console.log(stringResult);
}
result('teste 1 de teste 2 string 3')