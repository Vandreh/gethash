import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPhotosUseCase } from "./ListPhotosUseCase";

class ListPhotosController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listPhotosUseCase = container.resolve(ListPhotosUseCase);
        
        const all = await listPhotosUseCase.execute();
        
        return res.json(all);
    }
}

export { ListPhotosController };