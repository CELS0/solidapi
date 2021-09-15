import { User } from "../../entities/user";
import { IMailprovaider } from "../../providers/IMailprovaider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUser } from "./CreateUserDTO";

export class CreateUserUserCase {
  constructor(
    private userRepository: IUsersRepository,
    private mailProvider: IMailprovaider,
  ) { }
  async execute(data: ICreateUser): Promise<User> {
    const UserExist = await this.userRepository.findByEmail(data.email);

    if (UserExist) {
      throw new Error("User already exists");
    }
    const user = await this.userRepository.execute(data);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe do Meu App',
        email: 'equipe@meuapp.com',
      },
      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você já pode fazer login em nossa plataforma G6.</p>'
    })
    return user
  }
}