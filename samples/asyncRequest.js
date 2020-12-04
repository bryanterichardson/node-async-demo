import axios from 'axios'

// Make it look like python for da winnie fam
let print = console.log
let asyncRequest = axios
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let count = 1
let start = new Date()

async function handleAsyncRequest (url) {
    const requestNumber = count++
    print(`Firing request ${requestNumber}`)
    await asyncRequest.get(url)
    print(`Finished request ${requestNumber}`)
}

Promise.all([
    handleAsyncRequest('http://localhost:3000/?timeout=7'),
    handleAsyncRequest('http://localhost:3000/?timeout=3'),
    handleAsyncRequest('http://localhost:3000/?timeout=5'),
]).then(() => {
    let end = new Date()
    let elapsed =  (end - start)/1000
    print(`Elapsed time: ${elapsed} seconds`)
})
