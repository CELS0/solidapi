import { User } from "../entities/user";
import { ICreateUser } from "../userCases/CreateUser/CreateUserDTO";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<User>;
    create(user: ICreateUser): Promise<User>;
}