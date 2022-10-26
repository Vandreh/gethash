import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { IPhotosRepository } from "../../repositories/IPhotosRepository";
import { Photo } from '../../infra/typeorm/entities/Photo';

@injectable()
class ListOnePhotoUseCase {
    constructor(
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository) {}

    async execute({ title }): Promise<Photo> {
        
        const photo = await this.photosRepository.findByTitle(title);
        return photo;

    }
}

export { ListOnePhotoUseCase };