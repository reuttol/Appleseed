const express = require('express');

const app = express();
const PORT = 3000;

app.get('/numbers', (req, res)  => {
    console.log("success using get");
    res.send("closing");
});

app.put('/numbers', (req, res)  => {
    console.log("success using put");
    res.send("closing");
});

app.delete('/numbers', (req, res)  => {
    console.log("success using delete");
    res.send("closing");
});

app.post('/numbers', (req, res)  => {
    console.log("success using post");
    res.send("closing");
});

app.listen(3000, ()=>{
    console.log(`Listening to port ${PORT}`);
})