import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { IPhotosRepository } from "../../repositories/IPhotosRepository";

interface IRequest {
    title: string;
    description: string;
    photo_file: string;
    user_id: string;
}

@injectable()
class CreatePhotoUseCase {
    constructor(
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository) {}

    async execute({ title, description, photo_file, user_id }: IRequest): Promise<void> {
        const photoAlreadyExists = await this.photosRepository.findByTitle(title);

        if (photoAlreadyExists) {
            throw new AppError('Photo Already exists!');
        }

        this.photosRepository.create({ title, description, photo_file, user_id });
    }
}

export { CreatePhotoUseCase };