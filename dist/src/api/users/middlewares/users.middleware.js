"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMiddleware = void 0;
const users_services_1 = require("../services/users.services");
class UsersMiddleware {
    static getInstance() {
        if (!UsersMiddleware.instance) {
            UsersMiddleware.instance = new UsersMiddleware();
        }
        return UsersMiddleware.instance;
    }
    validateRequiredCreateUserBodyFields(req, res, next) {
        if (req.body && req.body.email && req.body.password) {
            next();
        }
        else {
            res.status(400).send({ error: `Missing required fields email and password` });
        }
    }
    async validateSameEmailDoesntExist(req, res, next) {
        const userService = users_services_1.UsersService.getInstance();
        // const user = await userService.getByEmail(req.body.email);
        // if (user) {
        //     res.status(400).send({error: `User email already exists`});
        // } else {
        //     next();
        // }
    }
    async validateUserExists(req, res, next) {
        const userService = users_services_1.UsersService.getInstance();
        const user = await userService.readById(req.params.userId);
        if (user) {
            next();
        }
        else {
            res.status(404).send({ error: `User ${req.params.userId} not found` });
        }
    }
    async extractUserId(req, res, next) {
        req.body.id = req.params.userId;
        next();
    }
}
exports.UsersMiddleware = UsersMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdXNlcnMvbWlkZGxld2FyZXMvdXNlcnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwrREFBd0Q7QUFDeEQsTUFBYSxlQUFlO0lBR3hCLE1BQU0sQ0FBQyxXQUFXO1FBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxlQUFlLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBb0MsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7UUFDeEcsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pELElBQUksRUFBRSxDQUFDO1NBQ1Y7YUFBTTtZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLDRDQUE0QyxFQUFDLENBQUMsQ0FBQztTQUMvRTtJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsNEJBQTRCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1FBQ3RHLE1BQU0sV0FBVyxHQUFHLDZCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0MsNkRBQTZEO1FBQzdELGNBQWM7UUFDZCxrRUFBa0U7UUFDbEUsV0FBVztRQUNYLGNBQWM7UUFDZCxJQUFJO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7UUFDNUYsTUFBTSxXQUFXLEdBQUcsNkJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxNQUFNLElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksRUFBRSxDQUFDO1NBQ1Y7YUFBTTtZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQVksRUFBQyxDQUFDLENBQUM7U0FDeEU7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7UUFDdkYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQ0o7QUExQ0QsMENBMENDIn0=