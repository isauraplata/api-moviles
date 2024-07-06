import { Request, Response } from "express";
import { UpdateCuriousFact } from "../../application/updateCuriousFactUseCase"; // Importa el caso de uso de actualización correspondiente

export class UpdateCuriousFactController {
  constructor(readonly updateCuriousFactUseCase: UpdateCuriousFact) {}

  async run(req: Request, res: Response) {
    const id = req.params.id;
    const data = req.body; // Datos a actualizar, como title y description

    try {
      // Aquí podrías validar los datos recibidos antes de continuar

      // Llama al caso de uso para realizar la actualización
      const updatedCuriousFact = await this.updateCuriousFactUseCase.run(id, data.title, data.description);

      // Verifica si se pudo actualizar correctamente
      if (updatedCuriousFact) {
        res.status(200).send({
          status: "success",
          data: {
            id: updatedCuriousFact.id,
            title: updatedCuriousFact.title,
            description: updatedCuriousFact.description,
            date: updatedCuriousFact.date,
            id_user: updatedCuriousFact.id_user
          },
        });
      } else {
        res.status(404).send({
          status: "error",
          data: "No se encontró el hecho curioso o no se pudo actualizar",
        });
      }
    } catch (error) {
      console.error("Error al actualizar el hecho curioso:", error);
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error al procesar la solicitud de actualización",
        message: error, // Mejor manejo de mensajes de error
      });
    }
  }
}
