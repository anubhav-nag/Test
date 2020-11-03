const { json } = require('body-parser');
const request = require('request');

_EXTERNAL_URL = 'https://magixapi.herokuapp.com/api/hash?p=';
ans = '';

function doing_hash(p) {
    request(_EXTERNAL_URL + p, function (error, response, body) {
        console.error('error:', error);
        console.log(body);
    });
}

module.exports = {
    doing_hash
}; 