import { inject, injectable } from 'tsyringe';

import { IPhotosRepository } from "../../repositories/IPhotosRepository";

@injectable()
class DeletePhotoUseCase {
    constructor(
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository) {}

    async execute({id}): Promise<void> {
        
        const photo = await this.photosRepository.deletePhoto(id);
    }
}

export { DeletePhotoUseCase };