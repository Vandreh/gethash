"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.photosRoutes = void 0;
var express_1 = require("express");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../../../../config/upload"));
var UploadImageController_1 = require("../../../../modules/photos/useCases/uploadImage/UploadImageController");
var ListPhotosController_1 = require("../../../../modules/photos/useCases/listPhotos/ListPhotosController");
var ListOnePhotosController_1 = require("../../../../modules/photos/useCases/listOnePhoto/ListOnePhotosController");
var UploadPhotosController_1 = require("../../../../modules/photos/useCases/uploadPhoto/UploadPhotosController");
var DeletePhotoController_1 = require("../../../../modules/photos/useCases/deletePhoto/DeletePhotoController");
var photosRoutes = (0, express_1.Router)();
exports.photosRoutes = photosRoutes;
var upload = (0, multer_1.default)({
    dest: './img'
});
var createPhotoController = new UploadImageController_1.UploadImageController();
var listOnePhotoController = new ListOnePhotosController_1.ListOnePhotoController();
var listPhotosController = new ListPhotosController_1.ListPhotosController();
var uploadPhotoController = new UploadPhotosController_1.UploadPhotoController();
var deletePhotoController = new DeletePhotoController_1.DeletePhotoController();
var uploadImage = (0, multer_1.default)(upload_1.default.upload('./img'));
photosRoutes.get('/', listPhotosController.handle);
photosRoutes.get('/:title', listOnePhotoController.handle);
photosRoutes.use(ensureAuthenticated_1.ensureAuthenticated);
photosRoutes.put('/:id', uploadPhotoController.handle);
photosRoutes.delete('/:id', deletePhotoController.handle);
photosRoutes.post('/:id', uploadImage.array("images"), createPhotoController.handle);
photosRoutes.put('/:description', uploadPhotoController.handle);
