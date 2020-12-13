"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require('babel-register')
const express_1 = __importDefault(require("express"));
const users_routes_config_1 = require("./src/api/users/users.routes.config");
// const express = require('express')
// const compression = require('compression')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')('dev')
// const cors = require('cors')
// const { authenticate } = require('./src/lib/authControl')
// const { checkAndChange } = require('./src/lib/utils')
const app = express_1.default();
const routes = [];
routes.push(new users_routes_config_1.UsersRoutes(app));
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
app.use('/', (req, res, next) => {
    res.status(200).send(`Started on  ${process.env.HOST}:${process.env.PORT}`);
});
app.listen(process.env.PORT, () => {
    console.log(`Argon mode : ${process.env.ENV}`);
    console.log(`Started on  ${process.env.HOST}:${process.env.PORT}`);
    routes.forEach((route) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJnb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcmdvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUE0QjtBQUM1QixzREFBNkI7QUFFN0IsNkVBQStEO0FBRS9ELHFDQUFxQztBQUNyQyw2Q0FBNkM7QUFDN0MsNENBQTRDO0FBQzVDLDBDQUEwQztBQUMxQywrQkFBK0I7QUFDL0IsNERBQTREO0FBQzVELHdEQUF3RDtBQUV4RCxNQUFNLEdBQUcsR0FBd0IsaUJBQU8sRUFBRSxDQUFBO0FBRTFDLE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQTtBQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRWpDLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUVsQix3RUFBd0U7QUFDeEUseURBQXlEO0FBQ3pELHNFQUFzRTtBQUN0RSxLQUFLO0FBRUwsMkNBQTJDO0FBQzNDLCtDQUErQztBQUMvQyxpQ0FBaUM7QUFDakMsSUFBSTtBQUdKLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2pFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzdFLENBQUMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFFbEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3pELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==