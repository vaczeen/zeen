const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('It\'s work fine.')
})

app.listen(PORT, () => console.log('server running on port 9000'))

console.log('Hello');