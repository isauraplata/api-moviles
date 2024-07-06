import { query } from "../../database/mysql";
import { User } from "../domain/models/userModel";
import { UserRepository } from "../domain/interfaces/userRepository";

export class MysqlUserRepository implements UserRepository {

  async getAllUser(): Promise<User[]> {
    const sql = "SELECT * FROM users";
    try {
      const [results]: any = await query(sql, []);
      return results.map((user: any) => new User(user.id, user.name, user.email, user.phone, user.password, user.is_mechanic));
    } catch (error) {
      throw new Error(`Error obtaining users: ${error}`);
    }
  }


  async getUser(email: string): Promise<User | null> {
    const sql = "SELECT * FROM users WHERE email = ?";
    const params: any[] = [email];
    try {
      const [results]: any = await query(sql, params);
      if (results.length > 0) {
        const user = results[0];
        return new User(user.id, user.name, user.email, user.phone, user.password, user.is_mechanic);
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Error obtaining user: ${error}`);
    }
  }

  async deleteUser(id: string): Promise<string | null> {
    const sql = "DELETE FROM users WHERE id = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0 ? id : null;
    } catch (error) {
      throw new Error(`Error deleting user: ${error}`);
    }
  }

  async updateUser(id: string, name: string, email: string, password: string): Promise<boolean> {
    const sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
    const params: any[] = [name, email, password, id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error updating user: ${error}`);
    }
  }

  async registerUser(name: string, email: string, phone: string, password: string, is_mechanic: boolean): Promise<User | null> {
    const sql = "INSERT INTO users (name, email, phone, password, is_mechanic) VALUES (?, ?, ?, ?, ?)";
    const params: any[] = [name, email, phone, password, is_mechanic];
    try {
      const [result]: any = await query(sql, params);
      if (result.insertId) {
        return new User(result.insertId, name, email, phone, password, is_mechanic);
      } else {
        console.error("Insert operation did not return an insertId. Full result:", JSON.stringify(result));
        return null;
      }
    } catch (error) {
      console.error(`Error creating user:`, error);
      throw new Error(`Error creating user: ${error}`);
    }
  }

  async loginUser(email: string, password: string): Promise<User | null> {
    const sql = "SELECT * FROM users WHERE email = ?";
    const params: any[] = [email];
    try {
      const [results]: any = await query(sql, params);
      if (results.length > 0) {
        const user = results[0];
        return new User(user.id, user.name, user.email, user.phone, user.password, user.is_mechanic);
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Error logging in user: ${error}`);
    }
  }
}