"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreatePhotoService {
    execute({ title, description, photo }) {
        console.log(title, description, photo);
    }
}
exports.default = new CreatePhotoService();
