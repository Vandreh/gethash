import { inject, injectable } from 'tsyringe';
import { Photo } from "../../infra/typeorm/entities/Photo";
import { IPhotosRepository } from "../../repositories/IPhotosRepository";

@injectable()
class ListPhotosUseCase {
    constructor(
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository) {}

    async execute(): Promise<Photo[]> {
        const photos = await  this.photosRepository.list();

        return photos;
    }
}

export { ListPhotosUseCase };