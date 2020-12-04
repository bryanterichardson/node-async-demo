import request from 'sync-request'

// Make it look like python for da winnie fam
let print = console.log
request.get = function(url) {
    return this('GET', url)
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //






let start = new Date()

print('Firing request 1')
request.get('http://localhost:3000/?timeout=7')
print('Finished request 1')

print('Firing request 2')
request.get('http://localhost:3000/?timeout=3')
print('Finished request 2')

print('Firing request 3')
request.get('http://localhost:3000/?timeout=5')
print('Finished request 3')

let end = new Date()
let elapsed =  (end - start)/1000
print(`Elapsed time: ${elapsed} seconds`)
