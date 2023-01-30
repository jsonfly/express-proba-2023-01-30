const express = require('express')
const app = express()
const port = 3000

const people = [
    {
        name: 'Béla',
        birthYear: 1990
    },
    {
        name: 'Lajos',
        birthYear: 1991
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const szia2Handler = (req, res) => {
    // res.send(`Szia ${req.query.name == null ? 'világ' : req.query.name}!`)
    // res.send(`Szia ${req.query.name || 'világ'}!`)
    res.send(`Hello ${req.params.name || 'világ'}!`)
}

app.get('/szia2', szia2Handler)
app.get('/szia2/:name', szia2Handler)

// not proper, if you check content-type response header in the browser, you'll see text/html
app.get('/people', (req, res) => {
    res.send(JSON.stringify(people))
})

// with proper response header
app.get('/people2', (req, res) => {
    res.json(people)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})