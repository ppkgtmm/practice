// if statements take equal time, top statement is exec first

/* setInterval(() => {
    console.log(`${Date.now()} interval 1s `)
}, 1000) */

setTimeout(() => {
    console.log(`${Date.now()} time out`)
}, 0)

setTimeout(() => {
    console.log(`${Date.now()} time out 2`)
}, 1000)


// exec before next event loop phase starting from creation time
// if written in main, next tick is exec before async code (before timer phase)
process.nextTick(() => {
    console.log(`${Date.now()} tick1`)
    // queued before next tick of outmost promise
    Promise.resolve('success').then(() => console.log(`resolve in next tick 1`))
    // win outmost promise
    process.nextTick(() => {
        console.log(`nested next tick`)
        process.nextTick(() => console.log(`nested next tick 2`))
    })
})
// promise if resolved and written in main , it also exec before timer phase
// but after next tick
Promise.resolve('success').then(() => {
    console.log(`${Date.now()} resloved`)
    process.nextTick(() => console.log(`next tick in resolve`) )
})
process.nextTick(() => {
    console.log(`${Date.now()} tick2`)
})
console.log('end main')

