var fs = require('fs');

/**
 * Returns secret key
 * @param {String} pathToKey
 * @returns {String}
 */
function getSecretKey(pathToKey) {
    return fs.readFileSync(pathToKey, 'utf-8')
            .replace('-----BEGIN RSA PRIVATE KEY-----', '')
            .replace('-----END RSA PRIVATE KEY-----', '')
            .trim();
}

module.exports = {
    getSecretKey: getSecretKey
};
