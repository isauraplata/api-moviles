//productRouter.ts
import express from "express";

import { createCuriousFactController, getAllCuriousFactController, deleteCuriousFactsController , updateUserController} from "./dependencies";

export const curiousFactRouter = express.Router();



// Rutas
curiousFactRouter.post("/", createCuriousFactController.run.bind(createCuriousFactController));

curiousFactRouter.get("/", getAllCuriousFactController.run.bind(getAllCuriousFactController));

curiousFactRouter.delete("/:id", deleteCuriousFactsController.run.bind(deleteCuriousFactsController));

curiousFactRouter.put("/:id", updateUserController.run.bind(updateUserController));

// productRouter.delete("/:id", deleteProductController.run.bind(deleteProductController));
// productRouter.get("/:id", getProductController.run.bind(getProductController));
// productRouter.post("/:id", updateProductController.run.bind(updateProductController));

