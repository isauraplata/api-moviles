import { MechanicWorkshop } from "../domain/models/mechanicWorkshopModel";
import { MechanicWorkshopRepository } from "../domain/interfaces/mechanicWorkshopRepository";

export class CreateMechanicWorkshop {
  constructor(readonly mechanicWorkshopRepository: MechanicWorkshopRepository) {}

  async run(
    name: string,
    address: string,
    postalCode: string,
    openingHours: Date,
    closingHours: Date,
    description: string,
    id_user: number,
  ): Promise<MechanicWorkshop | null> {
    try {
      const mechanicWorkshop = await this.mechanicWorkshopRepository.createMechanicWorkshop(
        name,
        address,
        postalCode,
        openingHours,
        closingHours,
        description,
        id_user
      );
      return mechanicWorkshop;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
