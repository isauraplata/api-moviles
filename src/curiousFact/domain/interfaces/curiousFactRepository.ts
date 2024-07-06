import { CuriousFact } from "../models/curiousFactModel";

export interface CuriousFactRepository {
  createCuriousFact(
     title: string,
     description: string,
     date: Date,
     id_user: number,
  ): Promise<CuriousFact | null>;
  deleteCuriousFact(
    id: string,
  ): Promise<string | any>;
  updateCuriousFact(
    id: string,
    title: string,
    description: string
  ): Promise<string | any>;
  getAllCuriousFacts(
  ): Promise<string | any>;
  getCuriousFact(id: string):Promise<CuriousFact | null>;
}