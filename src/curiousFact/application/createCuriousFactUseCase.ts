import { CuriousFact } from "../domain/models/curiousFactModel";
import { CuriousFactRepository } from "../domain/interfaces/curiousFactRepository";

export class CreateCuriousFact{
  constructor(readonly curiousFactRepository: CuriousFactRepository) {}

  async run(
    title: string,
    description: string,
    date: Date,
    id_user: number,

  ): Promise<CuriousFact | null> {
    try {
      const curiousFact= await this.curiousFactRepository.createCuriousFact(title, description, date, id_user)
      return curiousFact;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}