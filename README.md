# Random id generator

## Installation
``` sh
npm install --save @v57/date
```

``` js
const toDate = require('@v57/date')

console.log(toDate(1631812305))
console.log(toDate('1631812305'))
console.log(toDate(new Date()))
console.log(toDate('Thu Sep 16 2021 19:52:29 GMT+0300 (GMT+03:00)'))
console.log(toDate('2021-09-16T16:57:20Z'))
let a
console.log(toDate(a)) // should return undefined
```