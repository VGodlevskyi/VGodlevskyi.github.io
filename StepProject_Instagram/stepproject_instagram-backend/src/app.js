const express = require('express')
const mongoose = require('mongoose')
const { __DATASOURCE_URL } = require('./config')
const cookieParser = require('cookie-parser')
const webSecurity = require('./config/jwtToken/jwtToken.js')
const appRouter = require('./api/routes/appRouter.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(webSecurity())
app.use(appRouter())

mongoose.connect(
  __DATASOURCE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log(`Connected to database`)
  }
)

module.exports = app