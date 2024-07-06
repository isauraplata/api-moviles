import { CuriousFact } from "../domain/models/curiousFactModel";
import { CuriousFactRepository } from "../domain/interfaces/curiousFactRepository";

export class UpdateCuriousFact {
  constructor(private readonly curiousFactRepository: CuriousFactRepository) {}

  async getCuriousFact(id: string): Promise<CuriousFact | null> {
    return this.curiousFactRepository.getCuriousFact(id);
  }

  async run(
    id: string,
    title: string,
    description: string,
  ): Promise<CuriousFact | null> {
    return this.curiousFactRepository.updateCuriousFact(id,title, description,)
  }
}