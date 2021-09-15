import { ICreateUser } from '../../userCases/CreateUser/CreateUserDTO';
import { User } from '../../entities/user';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoriesInMemory implements IUsersRepository {
  users: User[] = [];


  async execute(data: ICreateUser): Promise<User> {
    const { email, name, password } = data;
    const user = new User();
    Object.assign(user, { email, name, password });
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async deleteById(id: string): Promise<void> {
    const user = this.users.find(item => item.id === id);
    this.users.splice(this.users.indexOf(user));
  }

  async updateById(id: string, data: ICreateUser): Promise<User> {
    const userIndex = this.users.findIndex(item => item.id === id);

    const user = this.users.find(item => item.id === id);
    Object.assign(user, data);

    this.users[userIndex] = user;
    return user;
  }
}
export { UsersRepositoriesInMemory };
