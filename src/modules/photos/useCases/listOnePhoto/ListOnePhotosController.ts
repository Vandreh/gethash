import { Request, Response } from "express";
import { container } from 'tsyringe';

import { ListOnePhotoUseCase } from "./ListOnePhotoUseCase";

class ListOnePhotoController {     
    async handle(req: Request, res: Response): Promise<Response> {
        const {title} = req.params;
        
        const createPhotoUseCase = container.resolve(ListOnePhotoUseCase)
        const photo = await createPhotoUseCase.execute({ title });

        return res.status(201).send(photo);
    }
}

export { ListOnePhotoController };