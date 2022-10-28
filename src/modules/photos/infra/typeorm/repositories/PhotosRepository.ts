import { getRepository, Repository } from "typeorm";
import {
    IPhotosRepository,
    ICreatePhotoDTO
} from '../../../repositories/IPhotosRepository';

import { Photo } from '../entities/Photo';

class PhotosRepository implements IPhotosRepository {    
    private repository: Repository<Photo>;

    constructor() {
        this.repository = getRepository(Photo);
    }
    
    async updatePhoto(id: string, description: string): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ description })
            .where("id = :id")
            .setParameters({ id })
            .execute()
    }
    async search(search: string): Promise<Photo[]> {
        if (!search) {
            const photos = await this.repository.find();
            return photos;
        } else {
            const photos = await this.repository
                .createQueryBuilder()
                .where("LOWER(title) like LOWER(:name) or LOWER(description) like LOWER(:name)", { name:`%${search}%` })
                .getMany();

            return photos;
        }
    }
    

    async create({ title, description, photo_file, user_id }: ICreatePhotoDTO): Promise<Photo> {
        const photo = this.repository.create({
            title,
            description,
            photo_file,
            user_id
        })

        await this.repository.save(photo);

        return photo;
    }

    async list(): Promise<Photo[]> {
        const photos = await this.repository.find();
        return photos
    }

    async findByTitle(title: string): Promise<Photo> {
        const photo = await this.repository.findOne({ title });
        return photo;
    }

    async findPhotoByUser(user_id: string): Promise<Photo[]> {
        const photos = await this.repository.find({ user_id });
        return photos;
    }

    async deletePhoto(id: string): Promise<void> {
        const photo = await this.repository.delete({ id });
    }
}

export { PhotosRepository };