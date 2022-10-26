import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

class UsersRepository  implements IUsersRepository{
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async findByName(name: string): Promise<User> {
        const user = await this.repository.findOne({ name });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }

    async create({ name, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            password
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };