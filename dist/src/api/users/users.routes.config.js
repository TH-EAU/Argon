"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = require("./users.controller");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        const usersController = new users_controller_1.UsersController();
        this.app.get(`/users`, [
            usersController.listUsers
        ]);
        this.app.post(`/users`, [
            usersController.createUser
        ]);
        this.app.put(`/users/:userId`, [
            usersController.put
        ]);
        this.app.patch(`/users/:userId`, [
            usersController.patch
        ]);
        this.app.delete(`/users/:userId`, [
            usersController.removeUser
        ]);
        this.app.get(`/users/:userId`, [
            usersController.getUserById
        ]);
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdXNlcnMvdXNlcnMucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5RUFBbUY7QUFDbkYseURBQW1EO0FBSW5ELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ1gsTUFBTSxlQUFlLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ25CLGVBQWUsQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQixlQUFlLENBQUMsVUFBVTtTQUM3QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixlQUFlLENBQUMsR0FBRztTQUN0QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QixlQUFlLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QixlQUFlLENBQUMsVUFBVTtTQUM3QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixlQUFlLENBQUMsV0FBVztTQUM5QixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFoQ0Qsa0NBZ0NDIn0=