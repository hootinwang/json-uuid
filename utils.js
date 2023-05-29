const _ = require('lodash')

function objectSort (obj) {
    let res = {}
    let objKeys = _.sortBy(Object.keys(obj))
    for (let i in objKeys) {
        res[objKeys[i]] = obj[objKeys[i]]
    }
    return res
}

function isPlainObject (val) {
    return val !== null && !Array.isArray(val) && typeof val === 'object';
}

function JSONRecurveSort (data) {
    if (isPlainObject(data)) {
        data = objectSort(data)
    }

    for (let i in data) {
        if (_.isObject(data[i])) {
            data[i] = JSONRecurveSort(data[i])
        }
    }

    return data
}

module.exports = { JSONRecurveSort }