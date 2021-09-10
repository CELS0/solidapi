import { User } from "../../entities/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUser } from "./CreateUserDTO";

export class CreateUserUserCase {
    constructor(
      private   userRepository: IUsersRepository,
    ){}
    async execute(data: ICreateUser): Promise<User>{
        const user = await this.userRepository.findByEmail(data.email);
        if(!user){
            return await this.userRepository.save(user);
        }
        return user;
    }
}