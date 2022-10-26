import { Request, Response } from "express";
import { container } from 'tsyringe';

import { UploadPhotoUseCase } from "./UploadPhotoUseCase";

class UploadPhotoController {     
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { description } = req.body;
        
        const createPhotoUseCase = container.resolve(UploadPhotoUseCase)
        const photo = await createPhotoUseCase.execute({id, description });

        return res.status(201).send(photo);
    }
}

export { UploadPhotoController };