const https = require('https')

if (!process.env.CHANNEL || !process.env.TOKEN) {
  throw new Error('need channel and token')
}

const channel = process.env.CHANNEL
const options = {
  hostname: 'slack.com',
  port: 443,
  path: '/api/chat.postMessage',
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
    'Content-Type': 'application/json'
  }
}

function sendPayload () {
  const payload = {
    channel, text: `${Math.random()}`
  }
  const req = https.request(options)
  
  req.write(JSON.stringify(payload))
  req.end()
}

module.exports = sendPayload
