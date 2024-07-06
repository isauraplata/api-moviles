import { Request, Response } from "express";
import { CreateCuriousFact } from "../../application/createCuriousFactUseCase";

export class CreateCuriousFactController {
  constructor(readonly createCuriousFactUseCase: CreateCuriousFact) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);

    try {
      const currentDate = new Date();  // Obtener la fecha y hora locales
      const curiousFact = await this.createCuriousFactUseCase.run(data.title, data.description, currentDate, data.id_user)

      console.log("imprimiendo curiousFact desde controller");
      console.log(curiousFact);

      if (curiousFact)
        res.status(201).send({
          status: "success",
          data: {
            id: curiousFact?.id,
            title: curiousFact?.title,
            description: curiousFact?.description,
            date: curiousFact?.date,
            id_user: curiousFact?.id_user
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      console.log(error);
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}