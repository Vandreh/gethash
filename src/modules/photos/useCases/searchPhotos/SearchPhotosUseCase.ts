import { inject, injectable } from 'tsyringe';
import { Photo } from "../../infra/typeorm/entities/Photo";
import { IPhotosRepository } from "../../repositories/IPhotosRepository";

@injectable()
class SearchPhotosUseCase {
    constructor(
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository) {}

    async execute({ search }): Promise<Photo[]> {
        const photos = await  this.photosRepository.search(search);

        return photos;
    }
}

export { SearchPhotosUseCase };