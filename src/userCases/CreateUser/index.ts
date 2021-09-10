import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserUserCase } from "./CreateUserUserCase";
import { CreateUserController } from "./CreateUserController";

const postgresUsersRepository = new PostgresUserRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUserCase(
  postgresUsersRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }