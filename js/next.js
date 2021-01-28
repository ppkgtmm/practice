const fs = require('fs')

setTimeout(() => {
    console.log('time out')
}, 6.75);
console.log(Date.now())
fs.readFile('./ini.json', (err, data) => {
    console.log(`${Date.now()} I/O completed`)
})
process.nextTick(() => {
    console.log('n')
    Promise.resolve().then(() => {
        console.log('p')
        process.nextTick(()=> console.log('n2'))
    })
    process.nextTick(() => {
        console.log('n3')
        process.nextTick(()=> console.log('n4'))
    })
})

Promise.resolve().then(() => {
    console.log('p2')
    process.nextTick(() => {
        console.log('n5')
        process.nextTick(() => console.log('n6'))
    })
    Promise.resolve().then(()=> console.log('p4'))
})

Promise.resolve().then(() => {
    console.log('p3')
    process.nextTick(() => console.log('n7'))
    Promise.resolve().then(() => console.log('p5'))
})
