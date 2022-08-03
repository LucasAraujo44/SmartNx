const axios = require('axios')

var zipCode = {
  logradouro: '',
  localidade: '',
  uf: '',
  gia: ''
};
axios.get('https://viacep.com.br/ws/66610250/json/', {})
  .then(function (response) {
    zipCode = response.data;
    let returnFormat = '';
    defineObject(zipCode);
    Object.entries(zipCode).forEach(([key, value]) => {
      if (key === 'logradouro') {
        returnFormat += ''.concat(value.toUpperCase());
      }
      else if (key === 'uf') {
        returnFormat += '/'.concat(value.toUpperCase());
      }
      else {
        returnFormat += ', '.concat(value.toUpperCase());
      }
    });
    console.log(returnFormat);
  });
function defineObject(userAddress) {
  delete userAddress.cep;
  delete userAddress.complemento;
  delete userAddress.ibge;
  delete userAddress.unidade;
  delete userAddress.gia;
}