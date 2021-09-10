import { User } from "../../entities/user";
import { IMailprovaider } from "../../providers/IMailprovaider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUser } from "./CreateUserDTO";

export class CreateUserUserCase {
    constructor(
      private   userRepository: IUsersRepository,
      private   mailProvider: IMailprovaider,
    ){}
    async execute(data: ICreateUser): Promise<User>{
        const user = await this.userRepository.findByEmail(data.email);
        if(!user){
            return await this.userRepository.save(user);
        }

        this.mailProvider.sendMail({
            to:{
                name: user.name,
                email: user.email,
            }, 
            from: {
                name: "solid",
                email: "solid@gmail.com",
            },
            subject: "Create User",
            body: "<p>Conceitos do solid</p>"
        })
        return user;
    }
}