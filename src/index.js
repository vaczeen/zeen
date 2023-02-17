const express = require('express')
const dotenv = require('dotenv')
const mongoose  = require('mongoose')
const bodyParser = require('body-parser')
const userRoute = require('./routes/user')
const app = express()

dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/',userRoute)

const PORT = process.env.PORT
const DB_USERNAME = process.env.DB_USERNAME || "root"
const DB_PASSWORD = process.env.DB_PASSWORD || "password"
const DB_HOST = process.env.HOST || "localhost"
const DB_NAME = process.env.DB_NAME || "mydatabase"

app.get('/', (req, res) => {
    res.send('It\'s work fine.')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))

const connectionURL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:8001/${DB_NAME}?authSource=admin`;

mongoose.set("strictQuery", true)
mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch((error) => console.log(`${error} did not connect`));

const db = mongoose.connection;

db.once("open",() => {
    console.log("Successfully connect to database");
})

console.log('Hello');