import { UserRepository } from "../domain/interfaces/userRepository";

export class GetAllUser{
  constructor(readonly userRepository: UserRepository) {}

  async run(): Promise<string | null> {
    try {
      const all= await this.userRepository.getAllUser();
      return all;
    } catch (error) {
      return null;
    }
  }
}