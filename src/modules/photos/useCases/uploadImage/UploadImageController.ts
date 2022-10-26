import { Request, response, Response } from "express";
import { container } from "tsyringe";
import { UploadImageUseCase } from "./UploadImageUseCase";

interface IFiles {
    filename: string;
}

class UploadImageController {
    async handle (req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { title, description } = req.body;
        const images = req.files as IFiles[];
        
        const uploadImageUseCase = container.resolve(UploadImageUseCase);

        const images_name = images.map(file => file.filename);

        await uploadImageUseCase.execute({
            title,
            description,
            images_name,
            user_id: id
        })

        return res.status(201).send();
    }
}

export { UploadImageController };