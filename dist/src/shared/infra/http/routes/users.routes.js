"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../../../../modules/accounts/useCases/CreateUser/CreateUserController");
var usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
var createUserController = new CreateUserController_1.CreateUserController();
usersRoutes.post('/', createUserController.handle);
