
# Deprecated in favor of [flat](https://www.npmjs.com/package/flat)







# flattenize-object

A Nodejs Library to flattenize an object within another object

## Installation
>   npm install flattenize-object --save

## Usage

```javascript
var flattenize = require('flattenize-object');
var obj = {
  "a": 1,
  "b": {
    "c": [
      2,
      3,
      4,
      5
    ],
    "d": 1,
    "e": "string",
    "inObj": {
      "f": 123,
      "g": [
        1,
        2,
        3
      ]
    }
  }
}
```

console.log(JSON.stringify(flatten(obj, 'b.inObj')));
```javascript
{
  "a": 1,
  "b": {
    "c": [
      2,
      3,
      4,
      5
    ],
    "d": 1,
    "e": "string",
    "f": 123,
    "g": [
      1,
      2,
      3
    ]
  }
}


```

console.log(JSON.stringify(flatten(obj, 'b'), undefined, 2));
```javascript
{
  "a": 1,
  "c": [
    2,
    3,
    4,
    5
  ],
  "d": 1,
  "e": "string",
  "f": 123,
  "g": [
    1,
    2,
    3
  ]
}


```

