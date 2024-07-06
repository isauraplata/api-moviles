import { MechanicWorkshopRepository } from "../domain/interfaces/mechanicWorkshopRepository";

export class GetAllMechanicWorkshop{
  constructor(readonly mechanicWorkshopRepository: MechanicWorkshopRepository) {}

  async run(): Promise<string | null> {
    try {
      const all= await this.mechanicWorkshopRepository.getAllMechanicWorkshops()
      return all;
    } catch (error) {
      return null;
    }
  }
}