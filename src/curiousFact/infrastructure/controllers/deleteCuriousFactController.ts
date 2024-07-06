import { Request, Response } from "express";
import { DeleteCuriousFact } from "../../application/deleteCuriousFactUseCase";

export class DeleteCuriousFactController {
  constructor(readonly deleteCuriousFactUseCase: DeleteCuriousFact) {}

  async run(req: Request, res: Response) {
    //const id: string = req.params.id; 
    const id = req.params.id; 
    console.log(id);

    try {
      const curiousFactDeleted = await this.deleteCuriousFactUseCase.run(id);

      if (curiousFactDeleted)
        res.status(201).send({
          status: "success",
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible eliminar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}