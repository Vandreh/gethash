import { Photo } from "../infra/typeorm/entities/Photo"; 

interface ICreatePhotoDTO {
    title: String,
    description: String,
    photo_file: String,
    user_id: String
}

interface IPhotosRepository {
    findByTitle(title: string): Promise<Photo>;
    findPhotoByUser(user_id: string): Promise<Photo[]>;
    list(): Promise<Photo[]>;
    create({ title, description, photo_file, user_id }: ICreatePhotoDTO): Promise<Photo>;
    updatePhoto(id: string, description: string): Promise<void>;
    deletePhoto(id: string): Promise<void>;
    search(name: string): Promise<Photo[]>;
}

export { IPhotosRepository, ICreatePhotoDTO };