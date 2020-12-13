import {CommonRoutesConfig, configureRoutes} from '../common/common.routes.config'
import {UsersMiddleware} from './middlewares/users.middleware';
import {UsersController} from './users.controller'

import express from 'express'

export class UsersRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'UsersRoute')
        this.configureRoutes()
    }

    configureRoutes() {
        const usersController = new UsersController()
        const usersMiddleware = UsersMiddleware.getInstance();

        this.app.get('/users', [
            usersController.listUsers
        ])
        
        /** On utilise les middlewares pour faire les vérification orientée métier */
        this.app.post('/users', [
            usersMiddleware.validateRequiredCreateUserBodyFields,
            usersMiddleware.validateSameEmailDoesntExist,
            usersController.createUser
        ])
        
        this.app.put('/users/:userId', [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.put
        ])
        
        this.app.patch('/users/:userId', [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.patch
        ])
        
        this.app.delete('/users/:userId', [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.removeUser
        ])
        
        this.app.get('/users/:userId', [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.getUserById
        ])
    }
}