//productRouter.ts
import express from "express";



import { createMechanicWorkshopController, getAllMechanicWorkshopsController } from "./dependencies";

export const mechanicWorkshopRouter = express.Router();



// Rutas
mechanicWorkshopRouter.post("/", createMechanicWorkshopController.run.bind(createMechanicWorkshopController));


mechanicWorkshopRouter.get("/", getAllMechanicWorkshopsController.run.bind(getAllMechanicWorkshopsController));


// curiousFactRouter.get("/", getAllCuriousFactController.run.bind(getAllCuriousFactController));

// curiousFactRouter.delete("/:id", deleteCuriousFactsController.run.bind(deleteCuriousFactsController));

// curiousFactRouter.put("/:id", updateUserController.run.bind(updateUserController));



