const https = require('https')
const url = 'https://geek-jokes.sameerkumar.website/api?format=json'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error has occured', error)
})

request.end();