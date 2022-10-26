import { AppError } from '../../../../shared/errors/AppError';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { injectable, inject } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string,
    password: string
}

interface IResponse {
    user: {
        name: string
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository) {}

    async execute({ name, password }: IRequest ): Promise<IResponse> {
        const user = await this.userRepository.findByName(name);

        if (!user) {
            throw new AppError("Name or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Name or password incorrect");
        }
        //md5 = gethash
        const token = sign({}, "7623ca46bf343099089d266619fc2139", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            user: { name: user.name },
            token
        };

        return tokenReturn;
    }
}

export {  AuthenticateUserUseCase };