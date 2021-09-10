import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/user";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUserRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User, "localhost");
    }
    async create(data: User): Promise<User> {
        const user = this.repository.create(data);
        return user;
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }
    async save(data: User): Promise<User> {
        const user = await this.repository.save(data);
        return user
    }
}