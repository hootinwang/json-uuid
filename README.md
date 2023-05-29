# json-uuid
This is a toolkit for generating JSON unique IDs

[![NPM version](https://img.shields.io/npm/v/json-uuid.svg?style=flat-square)](https://npmjs.org/package/json-uuid)
[![NPM download](https://img.shields.io/npm/dm/json-uuid.svg?style=flat-square)](https://npmjs.org/package/json-uuid)
[![Github stars](https://img.shields.io/github/stars/hootinwang/json-uuid?style=social)](https://github.com/hootinwang/json-uuid)
# Usage examples
```javascript
const jsonuuid = require('json-uuid')

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
            "f3": 3,
            "f2": 3,
            "f1": 3,
        },
        "3r": 1,
        "1r": 1,
    }
}]

if (jsonuuid.id(a) === jsonuuid.id(b)) {
    console.log('yes');
} else {
    console.log('no')
}

```
