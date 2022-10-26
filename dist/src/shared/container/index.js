"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var PhotosRepository_1 = require("../../modules/photos/infra/typeorm/repositories/PhotosRepository");
var UsersRepository_1 = require("../../modules/accounts/infra/typeorm/repositories/UsersRepository");
tsyringe_1.container.registerSingleton("PhotosRepository", PhotosRepository_1.PhotosRepository);
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
