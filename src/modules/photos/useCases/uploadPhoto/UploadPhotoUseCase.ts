import { inject, injectable } from 'tsyringe';

import { IPhotosRepository } from "../../repositories/IPhotosRepository";

@injectable()
class UploadPhotoUseCase {
    constructor(
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository) {}

    async execute({id, description }): Promise<void> {
        
        const photo = await this.photosRepository.updatePhoto(id, description);
    }
}

export { UploadPhotoUseCase };