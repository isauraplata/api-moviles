import { Request, Response } from "express";
import { CreateMechanicWorkshop } from "../../application/createMechanicWorkshopUseCase";

export class CreateMechanicWorkshopController {
  constructor(readonly createMechanicWorkshopUseCase: CreateMechanicWorkshop) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);

    try {
      const mechanicWorkshop = await this.createMechanicWorkshopUseCase.run(
        data.name,
        data.address,
        data.postalCode,
        new Date(data.openingHours),
        new Date(data.closingHours),
        data.description,
        data.id_user
      );

      console.log("Imprimiendo mechanicWorkshop desde controller");
      console.log(mechanicWorkshop);

      if (mechanicWorkshop) {
        res.status(201).send({
          status: "success",
          data: {
            id: mechanicWorkshop.id,
            name: mechanicWorkshop.name,
            address: mechanicWorkshop.address,
            postalCode: mechanicWorkshop.postalCode,
            openingHours: mechanicWorkshop.openingHours,
            closingHours: mechanicWorkshop.closingHours,
            description: mechanicWorkshop.description,
            id_user: mechanicWorkshop.id_user,
          },
        });
      } else {
        res.status(204).send({
          status: "error",
          data: "No fue posible agregar el registro",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
