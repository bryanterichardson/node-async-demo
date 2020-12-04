// This will log the numbers 1-5 but in what order?
let print = console.log


setTimeout(() => {
    print(1)
}, 0)

for (let i = 2; i <= 5; i++) {
    print(i)
}