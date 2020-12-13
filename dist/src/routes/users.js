"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const config_1 = require("./config");
const usersController_1 = require("../controller/usersController");
class UsersRoutes extends config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        const usersController = new usersController_1.UsersController();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUE2RDtBQUM3RCxtRUFBOEQ7QUFJOUQsTUFBYSxXQUFZLFNBQVEsMkJBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsZUFBZSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BCLGVBQWUsQ0FBQyxVQUFVO1NBQzdCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQzNCLGVBQWUsQ0FBQyxHQUFHO1NBQ3RCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1lBQzdCLGVBQWUsQ0FBQyxLQUFLO1NBQ3hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFO1lBQzlCLGVBQWUsQ0FBQyxVQUFVO1NBQzdCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQzNCLGVBQWUsQ0FBQyxXQUFXO1NBQzlCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWhDRCxrQ0FnQ0MifQ==