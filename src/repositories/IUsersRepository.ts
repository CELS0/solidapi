import { User } from "../entities/user";
import { ICreateUser } from "../userCases/CreateUser/CreateUserDTO";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    salvar(user: User): Promise<User>;
    execute(user: ICreateUser): Promise<User>;
}