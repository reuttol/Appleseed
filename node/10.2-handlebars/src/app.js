const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')

const url = 'https://geek-jokes.sameerkumar.website/api'
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    let data;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
           console.log("error");
        }  else {
            console.log(body);
            data = body;
            // res.render('index', {
            //     data,
            // })
            res.send(body)
        }
    })
    
})
app.get('/joke', (req, res) => {
    res.render('index', {
        data: JSON.parse(data)
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})