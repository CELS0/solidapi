import { User } from "../entities/user";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<User>;
}