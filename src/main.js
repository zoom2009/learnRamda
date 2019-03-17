const R = require('ramda')
const fs = require('fs')

// Basic Functional 
const f1 = (x, y, z) => x + y + z // normal version
const f2 = x => y => z => x + y + z // // curried version 

console.log('fn normal version :', f1(1,2,3)) 

let temp1 = f2(1)
let temp2 = temp1(2)
let sum = x => temp2(x)
console.log('fn curried version :', sum(3)) 

// Query data
const readF = path => fs.readFileSync(path, {encoding: 'utf-8'})

R.pipe(
    R.map(readF),
    R.map(R.split('\n')),
    R.map(R.map(R.split('\t'))),
    R.map(R.map(R.take(2))),
    // console.log
)(['./input/data1.csv', './input/data2.csv'])


// __
const dec1 = R.subtract(1) // know 1st arg wait another come dec to 1
console.log('dec normal :', 
    dec1(10)
)

const dec2 = R.subtract(R.__, 1) // dont know 1st arg but know 2nd arg
console.log('dec with __ :', 
    dec2(10)
)







