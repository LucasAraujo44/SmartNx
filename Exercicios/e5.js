var result = 'T35t3 d3 35t4g1o';
var key = [];
key[1] = 'i';
key[3] = 'e';
key[4] = 'a';
key[5] = 's';

function keyForms(resultString) {
    [...resultString].forEach(verificaChar);

    console.log(result);
}

function verificaChar(element) {
    key.forEach(function (value, i) {
        if (element == i) {
            result = result.replace(element, key[i]);
        }
    });
}
keyForms(result);

