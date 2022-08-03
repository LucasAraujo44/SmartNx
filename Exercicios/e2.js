function myFunction(result, str1, str2) {
    result(str1, str2)
}
function resultString(str1, str2) {
    console.log(str1.concat(str2))
}
myFunction(resultString, 'Olá', ' mundo !!')