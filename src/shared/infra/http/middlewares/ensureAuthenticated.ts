import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { AppError } from "../../../errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token missing', 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "7623ca46bf343099089d266619fc2139") as IPayload;
        
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User does not exists!', 401);
        }

        next();
    } catch (error) {
        throw new AppError('Invalid token!', 401);
    }
}