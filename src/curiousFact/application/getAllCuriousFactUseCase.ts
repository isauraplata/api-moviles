import { CuriousFactRepository } from "../domain/interfaces/curiousFactRepository";

export class GetAllCuriousFacts{
  constructor(readonly curiousFactRepository: CuriousFactRepository) {}

  async run(): Promise<string | null> {
    try {
      const all= await this.curiousFactRepository.getAllCuriousFacts();
      return all;
    } catch (error) {
      return null;
    }
  }
}