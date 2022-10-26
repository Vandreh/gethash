"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authenticate_routes_1 = require("./authenticate.routes");
var photos_routes_1 = require("./photos.routes");
var users_routes_1 = require("./users.routes");
var router = (0, express_1.Router)();
exports.router = router;
router.use("/photos", photos_routes_1.photosRoutes);
router.use("/users", users_routes_1.usersRoutes);
router.use(authenticate_routes_1.authenticateRoutes);