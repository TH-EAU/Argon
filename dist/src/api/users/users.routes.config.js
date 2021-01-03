"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_middleware_1 = require("./middlewares/users.middleware");
const users_controller_1 = require("./users.controller");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        const usersController = new users_controller_1.UsersController();
        const usersMiddleware = users_middleware_1.UsersMiddleware.getInstance();
        this.app.get('/users', [
            usersController.listUsers
        ]);
        /** On utilise les middlewares pour faire les vérification orientée métier */
        this.app.post('/users', [
            usersMiddleware.validateRequiredCreateUserBodyFields,
            usersMiddleware.validateSameEmailDoesntExist,
            usersController.createUser
        ]);
        this.app.put('/users/:userId', [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.put
        ]);
        this.app.patch('/users/:userId', [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.patch
        ]);
        this.app.delete('/users/:userId', [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.removeUser
        ]);
        this.app.get('/users/:userId', [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.getUserById
        ]);
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdXNlcnMvdXNlcnMucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5RUFBa0Y7QUFDbEYscUVBQStEO0FBQy9ELHlEQUFrRDtBQUlsRCxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBRUQsZUFBZTtRQUNYLE1BQU0sZUFBZSxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFBO1FBQzdDLE1BQU0sZUFBZSxHQUFHLGtDQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ25CLGVBQWUsQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQTtRQUVGLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEIsZUFBZSxDQUFDLG9DQUFvQztZQUNwRCxlQUFlLENBQUMsNEJBQTRCO1lBQzVDLGVBQWUsQ0FBQyxVQUFVO1NBQzdCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQzNCLGVBQWUsQ0FBQyxrQkFBa0I7WUFDbEMsZUFBZSxDQUFDLGFBQWE7WUFDN0IsZUFBZSxDQUFDLEdBQUc7U0FDdEIsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IsZUFBZSxDQUFDLGtCQUFrQjtZQUNsQyxlQUFlLENBQUMsYUFBYTtZQUM3QixlQUFlLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QixlQUFlLENBQUMsa0JBQWtCO1lBQ2xDLGVBQWUsQ0FBQyxhQUFhO1lBQzdCLGVBQWUsQ0FBQyxVQUFVO1NBQzdCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQzNCLGVBQWUsQ0FBQyxrQkFBa0I7WUFDbEMsZUFBZSxDQUFDLGFBQWE7WUFDN0IsZUFBZSxDQUFDLFdBQVc7U0FDOUIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBN0NELGtDQTZDQyJ9