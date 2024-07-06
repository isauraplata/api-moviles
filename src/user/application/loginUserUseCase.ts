import { User } from "../domain/models/userModel";
import { UserRepository } from "../domain/interfaces/userRepository";

export class LoginUser{
  constructor(readonly userRepository: UserRepository) {}

  async run(
    email: string,
    password: string,
  ): Promise<User | null> {
    try {
      const user= await this.userRepository.loginUser(email,password);
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}