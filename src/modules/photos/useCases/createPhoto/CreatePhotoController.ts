import { Request, Response } from "express";
import { container } from 'tsyringe';

import { CreatePhotoUseCase } from "./CreatePhotoUseCase";

class CreatePhotoController {     
    async handle(req: Request, res: Response): Promise<Response> {
        const {title, description, photo_file, user_id} = req.body;
        
        const createPhotoUseCase = container.resolve(CreatePhotoUseCase)
        await createPhotoUseCase.execute({ title, description, photo_file, user_id });

        return res.status(201).send();
    }
}

export { CreatePhotoController };