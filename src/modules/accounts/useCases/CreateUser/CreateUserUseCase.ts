import { inject, injectable } from "tsyringe";
import { hash } from 'bcrypt';

import { ICreateUserDTO } from "../../../accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({
        name,
        password
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByName(name);

        if (userAlreadyExists) {
            throw new AppError('User already exists!');
        }

        const passwordHash = await hash(password, 8)

        await this.userRepository.create({
            name,
            password: passwordHash
        });
    }
}

export { CreateUserUseCase };