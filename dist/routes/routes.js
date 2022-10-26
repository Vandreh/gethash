"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const CreatePhotoService_1 = __importDefault(require("../services/CreatePhotoService"));
function createUser(req, res) {
    CreatePhotoService_1.default.execute({
        title: 'title',
        description: 'description',
        photo: 'urlphoto'
    });
    return res.send('recebido');
}
exports.createUser = createUser;
