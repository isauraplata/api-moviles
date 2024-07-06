import { query } from "../../database/mysql";
import { CuriousFact } from "../domain/models/curiousFactModel";
import { CuriousFactRepository } from "../domain/interfaces/curiousFactRepository";

export class MysqlCuriousFactRepository implements CuriousFactRepository {

  async updateCuriousFact(id: string,title: string, description: string): Promise<string | any> {
    const sql = `
      UPDATE curious_facts
      SET title = ?, description = ?
      WHERE id = ?
    `;
    const params: any[] = [title, description, id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0  || null;
    } catch (error) {
      throw new Error(`Error updating curious fact: ${error}`);
    }
  }

  async createCuriousFact(title: string, description: string, date: Date, id_user: number): Promise<CuriousFact | null> {
    // id_user = Number(id_user);
    const sql = "INSERT INTO curious_facts (title, description, date, id_user) VALUES (?, ?, ?, ?)";
    const params: any[] = [title, description, date, id_user];
  
    try {
      const [result]: any = await query(sql, params);
  
      console.log("Query result:", result);
      console.log("Query result:", result.insertId);
      return new CuriousFact(result.insertId, title, description, date, id_user);
    } catch (error) {
      console.error(`Error creating curious fact: ${error}`);
      return null;
    }
  }

  async deleteCuriousFact(id: string): Promise<string | any> {
    const sql = "DELETE FROM curious_facts WHERE id = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0 ? id : null;
    } catch (error) {
      throw new Error(`Error deleting curious fact: ${error}`);
    }
  }


  async getAllCuriousFacts(): Promise<CuriousFact[] | null> {
    const sql = "SELECT * FROM curious_facts";
    try {
      const [results]: any = await query(sql, []);
      if (results.length > 0) {
        return results.map((fact: any) => new CuriousFact(fact.id, fact.title, fact.description, fact.date, fact.id_user));
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Error obtaining all curious facts: ${error}`);
    }
  }

  async getCuriousFact(id: string): Promise<CuriousFact | null> {
    const sql = "SELECT * FROM curious_facts WHERE id = ?";
    const params: any[] = [id];
    try {
      const [results]: any = await query(sql, params);
      if (results.length > 0) {
        const fact = results[0];
        return new CuriousFact(fact.id, fact.title, fact.description, fact.date, fact.id_user);
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Error obtaining curious fact: ${error}`);
    }
  }
}
