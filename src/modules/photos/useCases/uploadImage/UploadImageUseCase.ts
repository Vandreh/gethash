import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { IPhotosRepository } from "../../repositories/IPhotosRepository";

interface IRequest {
    title: string;
    description: string;
    images_name: string[];
    user_id: string;
}

@injectable()
class UploadImageUseCase {
    constructor(
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository) {}

    async execute({ title, description, images_name, user_id }: IRequest): Promise<void> {
        images_name.map(async photo_file => {
            await this.photosRepository.create({ title, description, photo_file, user_id });
        })
    }
}

export { UploadImageUseCase };