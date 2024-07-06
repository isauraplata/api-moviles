import { CuriousFact } from "../domain/models/curiousFactModel";
import { CuriousFactRepository } from "../domain/interfaces/curiousFactRepository";

export class DeleteCuriousFact{
  constructor(readonly curiousFactRepository: CuriousFactRepository) {}

  async run(
    id: string,
  ): Promise<CuriousFact | null> {
    try {
      const curiousFact= await this.curiousFactRepository.deleteCuriousFact(id);
      return curiousFact;
    } catch (error) {
      return null;
    }
  }
}