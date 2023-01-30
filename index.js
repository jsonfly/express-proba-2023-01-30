const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const szia2Handler = (req, res) => {
    // res.send(`Szia ${req.query.name == null ? 'világ' : req.query.name}!`)
    // res.send(`Szia ${req.query.name || 'világ'}!`)
    res.send(`Hello ${req.params.name || 'világ'}!`)
};

app.get('/szia2', szia2Handler)
app.get('/szia2/:name', szia2Handler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})