// es module
import sum from './sum'

// commonjs
var minus = require('./minus')

// amd,异步加载
var muti = require(['./muti'], function(muti) {
    console.log('muti(3,5)=', minus(3, 5))
})

console.log('sum(23,24)=', sum(23, 24))
console.log('minus(23,17)=', minus(23, 17))