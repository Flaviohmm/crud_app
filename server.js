const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

// Log Requests
app.use(morgan('tiny'))

// Parse Request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// Set View Engine
app.set("view engine", "ejs")
    // app.set("views", path.resolve(__dirname, "views/ejs"))

// Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// Load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) })