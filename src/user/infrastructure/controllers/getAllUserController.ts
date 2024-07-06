import { Request, Response } from "express";
import { GetAllUser } from "../../application/getAllUserUseCase";

export class GetAllUsersController {
  constructor(readonly getAllUserUseCase: GetAllUser) {}

  async run(req: Request, res: Response) {
    try {
      const data = await this.getAllUserUseCase.run();

      if (data) {
        res.status(201).send({
          status: "success",
          data: data
        });
      } else {
        res.status(204).send({
          status: "error",
          data: "NO fue posible obtener los registros",
        });
      }
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
