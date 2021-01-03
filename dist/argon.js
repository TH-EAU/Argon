"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
// require('babel-register')
const express_1 = __importDefault(require("express"));
const users_routes_config_1 = require("./src/api/users/users.routes.config");
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
// const express = require('express')
// const compression = require('compression')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')('dev')
// const cors = require('cors')
// const { authenticate } = require('./src/lib/authControl')
// const { checkAndChange } = require('./src/lib/utils')
class App {
    constructor(NODE_ENV = 'development', PORT = 8080) {
        console.log(process.env.PORT);
        process.env.ENV = process.env.ENV || NODE_ENV;
        // process.env.PORT = process.env.PORT || PORT;
        this.app = express_1.default();
        this.app.use(helmet_1.default());
        if (NODE_ENV === 'development') {
            this.app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
            this.app.use(morgan_1.default('dev')); // log every request to the console
        }
        else {
            this.app.use(compression_1.default());
        }
        this.app.use(body_parser_1.default.urlencoded({ 'extended': true })); // parse application/x-www-form-urlencoded
        this.app.use(body_parser_1.default.json()); // parse application/json
        this.app.use(body_parser_1.default.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
        const routes = [];
        routes.push(new users_routes_config_1.UsersRoutes(this.app));
        this.app.use('/', (req, res, next) => {
            res.status(200).send(`Started on  ${process.env.HOST}:${process.env.PORT}`);
        });
        this.app.listen(process.env.PORT, () => {
            console.log(`Argon mode : ${process.env.ENV}`);
            console.log(`Started on  ${process.env.HOST}:${process.env.PORT}`);
            routes.forEach((route) => {
                console.log(`Routes configured for ${route.getName()}`);
            });
        });
    }
    ;
}
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJnb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcmdvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0QkFBNEI7QUFDNUIsc0RBQTZCO0FBRTdCLDZFQUErRDtBQUUvRCw4REFBc0M7QUFDdEMsb0RBQTRCO0FBQzVCLGdEQUF3QjtBQUN4QixvREFBNEI7QUFDNUIsOERBQXFDO0FBRXJDLHFDQUFxQztBQUNyQyw2Q0FBNkM7QUFDN0MsNENBQTRDO0FBQzVDLDBDQUEwQztBQUMxQywrQkFBK0I7QUFDL0IsNERBQTREO0FBQzVELHdEQUF3RDtBQUV4RCxNQUFhLEdBQUc7SUFJZCxZQUFZLFdBQW1CLGFBQWEsRUFBRSxPQUFlLElBQUk7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQztRQUM5QywrQ0FBK0M7UUFHL0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sRUFBRSxDQUFDLENBQUM7UUFFdkIsSUFBRyxRQUFRLEtBQUssYUFBYSxFQUFFO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxtQ0FBbUM7U0FDbEU7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMENBQTBDO1FBQ2xHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtRQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztRQUc5RyxNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUE7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFFdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3RFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzdFLENBQUMsQ0FBQyxDQUFBO1FBR0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBRWxFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDekQsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFBQSxDQUFDO0NBQ0g7QUExQ0Qsa0JBMENDIn0=