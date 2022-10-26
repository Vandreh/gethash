import { container } from 'tsyringe';
import { IPhotosRepository } from '../../modules/photos/repositories/IPhotosRepository';
import { PhotosRepository } from '../../modules/photos/infra/typeorm/repositories/PhotosRepository';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';


container.registerSingleton<IPhotosRepository> (
    "PhotosRepository",
    PhotosRepository
);

container.registerSingleton<IUsersRepository> (
    "UsersRepository",
    UsersRepository
);