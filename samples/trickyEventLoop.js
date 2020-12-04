// The numbers 1-5 (including 5) will be logged. But in what order?

setTimeout(() => {
    console.log(1)
}, 0)

const callPromise = async () => {
    console.log(2)
    let result = await Promise.resolve(3)
    console.log(result)
    let result2 = await Promise.resolve(4)
    console.log(result2)
}

callPromise()

console.log(5)