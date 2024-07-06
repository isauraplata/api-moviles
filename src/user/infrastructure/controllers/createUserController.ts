import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { RegisterUser } from "../../application/registerUserUseCase";

export class RegisterUserController {
  constructor(readonly registerUserUseCase: RegisterUser) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log("Request body:", data);
    try {
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      console.log("Hashed password:", hashPassword);
  
      const user = await this.registerUserUseCase.run(
        data.name,
        data.email,
        data.phone,
        hashPassword,
        data.is_mechanic
      );
  
      console.log("Result from registerUserUseCase:", user);
  
      if (user) {
        res.status(201).send({
          status: "success",
          data: user
        });
      } else {
        res.status(400).send({
          status: "error",
          message: "No fue posible agregar el registro",
        });
      }
    } catch (error) {
      console.error("Error in RegisterUserController:", error);
      res.status(500).send({
        status: "error",
        message: "Ocurrió un error interno",
        error: error
      });
    }
  }
}
