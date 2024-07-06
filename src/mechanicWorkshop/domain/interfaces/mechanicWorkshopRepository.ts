import { MechanicWorkshop } from "../models/mechanicWorkshopModel";

export interface MechanicWorkshopRepository {
  createMechanicWorkshop(
    name: string,
    address: string,
    postalCode: string,
    openingHours: Date,
    closingHours: Date,
    description: string,
    idUser: number,
  ): Promise<MechanicWorkshop | null>;
  deleteMechanicWorkshop(
    id: string,
  ): Promise<string | any>;
  updateMechanicWorkshop(
    id: number,
    name?: string,
    address?: string,
    postalCode?: string,
    openingHours?: Date,
    closingHours?: Date,
    description?: string,
    idUser?: number,
  ): Promise<string | any>;
  getMechanicWorkshop(id: string):Promise<MechanicWorkshop | null>;
  getAllMechanicWorkshops(
  ): Promise<string | any>;
}