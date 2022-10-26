"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
require("./src/shared/infra/typeorm");
require("./src/shared/container");
var routes_1 = require("./src/shared/infra/http/routes");
var AppError_1 = require("./src/shared/errors/AppError");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(function (err, req, res, next) {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error - ".concat(err.message)
    });
});
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("Server is running!"); });
