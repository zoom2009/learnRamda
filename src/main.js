const R = require('ramda')
const fs = require('fs')

// Basic Functional 
const f1 = (x, y, z) => x + y + z // normal version
const f2 = x => y => z => x + y + z // // curried version 

console.log('fn normal version :', f1(1,2,3)) 

const temp1 = f2(1)
const temp2 = temp1(2)
const sum = x => temp2(x)
console.log('fn curried version :', sum(3)) 

// Query data
const readF = path => fs.readFileSync(path, {encoding: 'utf-8'})

R.pipe(
    R.map(readF),
    R.map(R.split('\n')),
    R.map(R.map(R.split('\t'))),
    R.map(R.map(R.take(2))),
    console.log
)(['./input/data1.csv', './input/data2.csv'])


// __, add, subtract
const dec1 = R.subtract(1) // know 1st arg wait another come dec to 1
            //R.add(num)
console.log('dec normal :', 
    dec1(10)
)

const dec2 = R.subtract(R.__, 1) // dont know 1st arg but know 2nd arg
console.log('dec with __ :', 
    dec2(10)
)

// addIndex, adjust
console.log(
    R.addIndex(R.map)(R.multiply, [10,20,30,40]) // do fn follow index
)

console.log(
    R.adjust(2, R.subtract(R.__, 10), [100, 200, 300]) // select index and do fn
)






