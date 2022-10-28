import { Request, Response } from "express";
import { container } from "tsyringe";

import { SearchPhotosUseCase } from "./SearchPhotosUseCase";

class SearchPhotosController {
    async handle(req: Request, res: Response): Promise<Response> {
        const search = req.query.search;
        const listPhotosUseCase = container.resolve(SearchPhotosUseCase);
        
        const all = await listPhotosUseCase.execute({ search });
        
        return res.json(all);
    }
}

export { SearchPhotosController };