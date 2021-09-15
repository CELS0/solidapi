import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { User } from "../../entities/user";
import { ICreateUser } from "../../userCases/CreateUser/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
@EntityRepository(User)
export class PostgresUserRepository extends Repository<User> implements IUsersRepository {

    async execute(data: ICreateUser): Promise<User> {
        const repository = getCustomRepository(PostgresUserRepository)
        const user = repository.create(data)
        return await repository.save(user);
    }
    async findByEmail(email: string): Promise<User> {
        const repository = getCustomRepository(PostgresUserRepository)
        const user = await repository.findOne({ email });
        return user;
    }
    async salvar(data: User): Promise<User> {
        const repository = getCustomRepository(PostgresUserRepository)
        const user = await repository.save(data);
        return user
    }
}