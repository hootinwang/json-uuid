const _ = require('lodash')
const CryptoJS = require("crypto-js")
const utils = require('./utils')

class jsonUuid {
    /**
     * 生成ID
     * @param {Object|Array} data 
     * @returns {String}
     */
    id (data) {
        return CryptoJS.SHA1(JSON.stringify(utils.JSONRecurveSort(data))).toString()
    }
}
module.exports = new jsonUuid()