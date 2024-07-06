import { User } from "../domain/models/userModel";
import { UserRepository } from "../domain/interfaces/userRepository";

export class RegisterUser{
  constructor(readonly userRepository: UserRepository) {}

  async run(
    name: string,
    email: string,
    phone: string,
    password: string,
    is_mechanic: boolean
  ): Promise<User | null> {
    try {
      const user= await this.userRepository.registerUser(name,email,phone,password,is_mechanic);
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}