import { Request, Response } from "express";
import { container } from 'tsyringe';

import { DeletePhotoUseCase } from "./DeletePhotoUseCase";

class DeletePhotoController {     
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        
        const createPhotoUseCase = container.resolve(DeletePhotoUseCase)
        const photo = await createPhotoUseCase.execute({id});

        return res.status(201).send(photo);
    }
}

export { DeletePhotoController };