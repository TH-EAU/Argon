// require('babel-register')
import express from 'express'
import { CommonRoutesConfig } from './src/api/common/common.routes.config'
import {UsersRoutes} from './src/api/users/users.routes.config'

import compression from 'compression';
import helmet from "helmet";
import path from "path";
import morgan from 'morgan';
import bodyParser from "body-parser";

// const express = require('express')
// const compression = require('compression')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')('dev')
// const cors = require('cors')
// const { authenticate } = require('./src/lib/authControl')
// const { checkAndChange } = require('./src/lib/utils')

export class App {

  protected app: express.Application;

  constructor(NODE_ENV: string = 'development', PORT: number = 8080) {
    console.log(process.env.PORT)
    process.env.ENV = process.env.ENV || NODE_ENV;
    // process.env.PORT = process.env.PORT || PORT;


    this.app = express();
    this.app.use(helmet());

    if(NODE_ENV === 'development') {
      this.app.use(express.static(path.join(process.cwd(), 'public')));
      // this.app.use(morgan('dev'));  // log every request to the console
    } else {
      this.app.use(compression());
    }

    this.app.use(bodyParser.urlencoded({'extended':true})); // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.json()); // parse application/json
    this.app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
  
  
    const routes: any = []
    routes.push(new UsersRoutes(this.app))

    this.app.use('/', (req: express.Request, res: express.Response, next) => {
      res.status(200).send(`Started on  ${process.env.HOST}:${process.env.PORT}`)
    })


    this.app.listen(process.env.PORT, () => {
      console.log(`Argon mode : ${process.env.ENV}`)
      console.log(`Started on  ${process.env.HOST}:${process.env.PORT}`)
    
      routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`)
      })
    })
  };
}
