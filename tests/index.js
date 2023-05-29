// const jsonuuid = require('json-uuid')
const jsonuuid = require('../index')

let a = [1, 4, 2, 'a', {
    c: 1, a: 1, f: {
        "3r": 1,
        "1r": 1,
        "2r": {
            "f1": 3,
            "f3": 3,
            "f2": 3,
        },
    }
}]

let b = [1, 4, 2, 'a', {
    c: 1, a: 1, f: {
        "2r": {
            "f2": 3,
            "f3": 3,
            "f1": 3,
        },
        "3r": 1,
        "1r": 1,
    }
}]
let t1 = new Date().getTime()
let uuida = jsonuuid.id(a)
let uuidb = jsonuuid.id(b)
console.log(`use time: ${new Date().getTime()-t1}ms`);

if (uuida === uuidb) {
    console.log('yes');
} else {
    console.log('no')
}