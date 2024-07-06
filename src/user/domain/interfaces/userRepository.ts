import { User } from "../models/userModel";

export interface UserRepository {
  registerUser(
    name: string,
    email: string,
    phone: string,
    password: string,
    is_mechanic: boolean
  ): Promise<User | null>;
  loginUser(
    email: string,
    password: string,
  ): Promise<string | any>;
  deleteUser(
    id: string,
  ): Promise<string | any>;
  updateUser(
    id: string,
    name: string, 
    email: string, 
    password: string
  ): Promise<string | any>;
  getUser(email: string):Promise<User | null>;
  getAllUser(
  ): Promise<string | any>;
}