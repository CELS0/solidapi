import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UsersRepositoriesInMemory } from "../../repositories/In-Memory/UsersRepositoryInMemory";
import { CreateUserUserCase } from "../../userCases/CreateUser/CreateUserUserCase";

describe("Create user", () => {
    it("Should be able to create a new user", async () => {
        const usersRepositoriesInMemory = new UsersRepositoriesInMemory();
        const mailtrapMailProvider = new MailtrapMailProvider()
        const createUserUserCase = new CreateUserUserCase(usersRepositoriesInMemory,mailtrapMailProvider);

        const user = await createUserUserCase.execute({
            name: "test",
            email: "test@gmail.com",
            password: "123456"
        })
        expect(user).toHaveProperty("id");
    })
})
