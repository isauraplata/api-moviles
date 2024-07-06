import { Request, Response } from "express";


import { GetAllMechanicWorkshop } from "../../application/getAllMechanicWorkshopUseCase";

export class GetAllMechanicWorkshopsController {
  constructor(readonly getAllMechanicWorkshopUseCase: GetAllMechanicWorkshop) {}

  async run(req: Request, res: Response) {
    try {
      const mechanicWorkshops = await this.getAllMechanicWorkshopUseCase.run();

      if (mechanicWorkshops) {
        res.status(200).send({
          status: "success",
          data: mechanicWorkshops,
        });
      } else {
        res.status(204).send({
          status: "error",
          data: "No hay talleres mecánicos registrados",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error al obtener los talleres mecánicos",
        msn: error,
      });
    }
  }
}
