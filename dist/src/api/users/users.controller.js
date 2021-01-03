"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_services_1 = require("./services/users.services");
class UsersController {
    listUsers(req, res) {
        const usersService = users_services_1.UsersService.getInstance();
        const users = usersService.list(100, 0);
        res.status(200).send(users);
    }
    getUserById(req, res) {
        const usersService = users_services_1.UsersService.getInstance();
        const user = usersService.readById(req.params.userId);
        res.status(200).send(user);
    }
    createUser(req, res) {
        const usersService = users_services_1.UsersService.getInstance();
        const userId = usersService.create(req.body);
        res.status(201).send({ id: userId });
    }
    patch(req, res) {
        const usersService = users_services_1.UsersService.getInstance();
        usersService.patchById(req.body);
        res.status(204).send(``);
    }
    put(req, res) {
        const usersService = users_services_1.UsersService.getInstance();
        usersService.updateById(req.body);
        res.status(204).send(``);
    }
    removeUser(req, res) {
        const usersService = users_services_1.UsersService.getInstance();
        usersService.deleteById(req.params.userId);
        res.status(204).send(``);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBdUQ7QUFLdkQsTUFBYSxlQUFlO0lBRXhCLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ2pELE1BQU0sWUFBWSxHQUFHLDZCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ25ELE1BQU0sWUFBWSxHQUFHLDZCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNsRCxNQUFNLFlBQVksR0FBRyw2QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQzdDLE1BQU0sWUFBWSxHQUFHLDZCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQzNDLE1BQU0sWUFBWSxHQUFHLDZCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ2xELE1BQU0sWUFBWSxHQUFHLDZCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDSjtBQXJDRCwwQ0FxQ0MifQ==