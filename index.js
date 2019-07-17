const post = require('./post')

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main () {
  while (true) {
    await sleep(1500)
    post()
  }
}

main()
