// require('babel-register')
import express from 'express'

// const express = require('express')
// const compression = require('compression')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')('dev')
// const cors = require('cors')
// const { authenticate } = require('./src/lib/authControl')
// const { checkAndChange } = require('./src/lib/utils')

const app: express.Application = express()

// app.use(compression())
// app.use(bodyParser.json())
// app.use(cors())
// app.use(morgan)

// app.use('/', (req: express.Request, res: express.Response, next) => {
//   if (authenticate(req.body.password) === true) next()
//   else res.json(checkAndChange(new Error('Authentication failed')))
// })

// if (process.env.ENV === 'development') {
//   // import tests  from './src/routes/test';
//   // app.use('/tests/', tests)
// }


app.use('/', (req: express.Request, res: express.Response, next) => {
  res.status(200).send(`Started on  ${process.env.HOST}:${process.env.PORT}`);
})

app.listen(process.env.PORT, () => {
  console.log(`Argon mode : ${process.env.ENV}`)
  console.log(`Started on  ${process.env.HOST}:${process.env.PORT}`)
})