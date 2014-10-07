var jws = require('jws'),
    request = require('request'),
    utils = require('./utils');

module.exports = function (metadata, pathToSecret, host, callback) {
    var signature = jws.sign({
        header: { alg: 'HS256' },
        payload: metadata,
        secret: utils.getSecretKey(pathToSecret)
    });

    request.post('http://localhost:3000/award', { form: { signature: signature } }, function (err, req) {
        callback(err, req.body);
    });
};
