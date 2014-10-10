var jws = require('jws'),
    request = require('request'),
    utils = require('./utils');

/**
 * Awards the Open Badge
 * @param {Object} [data]
 * @param {String} [data.name]
 * @param {String} [data.email]
 * @param {String} pathToSecret
 * @param {String} host
 * @param {Function} callback
 */
module.exports = function (data, pathToSecret, host, callback) {
    var signature = jws.sign({
        header: { alg: 'HS256' },
        payload: data,
        secret: utils.getSecretKey(pathToSecret)
    });

    request.post(host, { form: { signature: signature } }, function (err, req) {
        callback(err, req.body);
    });
};
