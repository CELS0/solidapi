import { User } from "../../entities/user";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUserRepository implements IUsersRepository{
 async findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
  async save(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
}