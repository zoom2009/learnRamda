const R = require('ramda')
const fs = require('fs')

const readF = path => fs.readFileSync(path, {encoding: 'utf-8'})

R.pipe(
    R.map(readF),
    R.map(R.split('\n')),
    R.map(R.map(R.split('\t'))),
    R.map(R.map(R.take(2))),
    console.log
)(['./input/data1.csv', './input/data2.csv'])