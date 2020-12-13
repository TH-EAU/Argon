"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require('babel-register')
const express_1 = __importDefault(require("express"));
// const express = require('express')
// const compression = require('compression')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')('dev')
// const cors = require('cors')
// const { authenticate } = require('./src/lib/authControl')
// const { checkAndChange } = require('./src/lib/utils')
const app = express_1.default();
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJnb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcmdvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUE0QjtBQUM1QixzREFBNkI7QUFFN0IscUNBQXFDO0FBQ3JDLDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsMENBQTBDO0FBQzFDLCtCQUErQjtBQUMvQiw0REFBNEQ7QUFDNUQsd0RBQXdEO0FBRXhELE1BQU0sR0FBRyxHQUF3QixpQkFBTyxFQUFFLENBQUE7QUFFMUMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBRWxCLHdFQUF3RTtBQUN4RSx5REFBeUQ7QUFDekQsc0VBQXNFO0FBQ3RFLEtBQUs7QUFFTCwyQ0FBMkM7QUFDM0MsK0NBQStDO0FBQy9DLGlDQUFpQztBQUNqQyxJQUFJO0FBR0osR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsQ0FBQyxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUNwRSxDQUFDLENBQUMsQ0FBQSJ9