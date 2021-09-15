import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UsersRepositoriesInMemory } from "../../repositories/In-Memory/UsersRepositoryInMemory";
import { CreateUserUserCase } from "../../userCases/CreateUser/CreateUserUserCase";

let usersRepositoriesInMemory: UsersRepositoriesInMemory;
let mailtrapMailProvider: MailtrapMailProvider;
let createUserUserCase: CreateUserUserCase;

describe("Create user", () => {
    beforeEach(() => {
        usersRepositoriesInMemory = new UsersRepositoriesInMemory();
        mailtrapMailProvider = new MailtrapMailProvider()
        createUserUserCase = new CreateUserUserCase(usersRepositoriesInMemory, mailtrapMailProvider);
    })

    it("Should be able to create a new user", async () => {

        const user = await createUserUserCase.execute({
            name: "test",
            email: "test@gmail.com",
            password: "123456"
        })
        expect(user).toHaveProperty("id");
    })

    it("Should not be able to create an existing user", async () => {
        const user = {
            name: "testExist",
            email: "testExist@gmail.com",
            password: "123456"
        }

        await createUserUserCase.execute(user);

        await expect(createUserUserCase.execute(user)).rejects.toEqual(
            new Error("User already exists")
        )
    })
})
