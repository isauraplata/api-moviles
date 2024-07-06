import { query } from "../../database/mysql";
import { MechanicWorkshop } from "../domain/models/mechanicWorkshopModel";
import { MechanicWorkshopRepository } from "../domain/interfaces/mechanicWorkshopRepository";

export class MysqlMechanicWorkshopRepository implements MechanicWorkshopRepository {

  async createMechanicWorkshop(
    name: string,
    address: string,
    postalCode: string,
    openingHours: Date,
    closingHours: Date,
    description: string,
    idUser: number
  ): Promise<MechanicWorkshop | null> {
    const sql = "INSERT INTO mechanic_workshop (name, address, postal_code, opening_hours, closing_hours, description, id_user) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    // Convert dates to TIME format
    const openingHoursTime = openingHours.toISOString().split('T')[1].slice(0, 8); // Extract only time (YYYY-MM-DDTHH:mm:ss)
    const closingHoursTime = closingHours.toISOString().split('T')[1].slice(0, 8);
    
    
    // const params: any[] = [name, address, postalCode, openingHoursTime, closingHoursTime, description, idUser];
    const params: any[] = [name, address, postalCode, openingHoursTime, closingHoursTime, description, idUser];



    try {
      const result: any = await query(sql, params);
      if (Array.isArray(result) && result.length > 0) {
        return new MechanicWorkshop(result[0].insertId, name, address, postalCode, openingHours, closingHours, description, idUser);
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Error creating mechanic workshop: ${error}`);
      return null;
    }
  }

  async updateMechanicWorkshop(
    id: number,
    name?: string,
    address?: string,
    postalCode?: string,
    openingHours?: Date,
    closingHours?: Date,
    description?: string,
    idUser?: number
  ): Promise<number | null> {
    const sql = `
      UPDATE mechanic_workshop
      SET
        name = COALESCE(?, name),
        address = COALESCE(?, address),
        postal_code = COALESCE(?, postal_code),
        opening_hours = COALESCE(?, opening_hours),
        closing_hours = COALESCE(?, closing_hours),
        description = COALESCE(?, description),
        id_user = COALESCE(?, id_user)
      WHERE id = ?
    `;
    const params: any[] = [
      name, 
      address, 
      postalCode, 
      openingHours ? openingHours.toISOString().split('T')[1].split('Z')[0] : null,
      closingHours ? closingHours.toISOString().split('T')[1].split('Z')[0] : null,
      description, 
      idUser, 
      id
    ];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0 ? id : null;
    } catch (error) {
      throw new Error(`Error updating mechanic workshop: ${error}`);
    }
  }

  async deleteMechanicWorkshop(id: string): Promise<string | null> {
    const sql = "DELETE FROM mechanic_workshop WHERE id = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0 ? id : null;
    } catch (error) {
      throw new Error(`Error deleting mechanic workshop: ${error}`);
    }
  }

  async getMechanicWorkshop(id: string): Promise<MechanicWorkshop | null> {
    const sql = "SELECT * FROM mechanic_workshop WHERE id = ?";
    const params: any[] = [id];
    try {
      const [results]: any = await query(sql, params);
      if (results.length > 0) {
        const workshop = results[0];
        return new MechanicWorkshop(
          workshop.id,
          workshop.name,
          workshop.address,
          workshop.postal_code,
          new Date(workshop.opening_hours),
          new Date(workshop.closing_hours),
          workshop.description,
          workshop.id_user
        );
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Error obtaining mechanic workshop: ${error}`);
    }
  }

  async getAllMechanicWorkshops(): Promise<MechanicWorkshop[] | null> {
    const sql = "SELECT * FROM mechanic_workshop";
    try {
      const [results]: any = await query(sql, []);
      if (results.length > 0) {
        return results.map((workshop: any) => new MechanicWorkshop(
          workshop.id,
          workshop.name,
          workshop.address,
          workshop.postal_code,
          new Date(workshop.opening_hours),
          new Date(workshop.closing_hours),
          workshop.description,
          workshop.id_user
        ));
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Error obtaining all mechanic workshops: ${error}`);
    }
  }
}
