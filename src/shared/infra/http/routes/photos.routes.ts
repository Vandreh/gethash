import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '../../../../config/upload';

import { UploadImageController } from '../../../../modules/photos/useCases/uploadImage/UploadImageController';
import { ListPhotosController } from '../../../../modules/photos/useCases/listPhotos/ListPhotosController';
import { ListOnePhotoController } from '../../../../modules/photos/useCases/listOnePhoto/ListOnePhotosController';
import { UploadPhotoController } from '../../../../modules/photos/useCases/uploadPhoto/UploadPhotosController';
import { DeletePhotoController } from '../../../../modules/photos/useCases/deletePhoto/DeletePhotoController';
import { SearchPhotosController } from '../../../../modules/photos/useCases/searchPhotos/SearchPhotosController';


const photosRoutes = Router();

const upload = multer({
    dest: './img'
});

const createPhotoController = new UploadImageController();
const listOnePhotoController = new ListOnePhotoController();
const listPhotosController = new ListPhotosController();
const uploadPhotoController = new UploadPhotoController();
const deletePhotoController = new DeletePhotoController();
const searchPhotosController = new SearchPhotosController();

const uploadImage = multer(uploadConfig.upload('./img'));

//photosRoutes.get('/' , listPhotosController.handle);
photosRoutes.get('/', searchPhotosController.handle);
photosRoutes.get('/:title' , listOnePhotoController.handle);

photosRoutes.use(ensureAuthenticated)

photosRoutes.put('/:id' , uploadPhotoController.handle);
photosRoutes.delete('/:id' , deletePhotoController.handle);

photosRoutes.post('/:id',
    uploadImage.array("images"),    
    createPhotoController.handle
);

photosRoutes.put('/:description' , uploadPhotoController.handle);

export { photosRoutes };