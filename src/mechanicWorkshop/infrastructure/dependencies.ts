import { MysqlMechanicWorkshopRepository } from "./MysqlRepository";
import dotenv from "dotenv";

import { CreateMechanicWorkshop } from "../application/createMechanicWorkshopUseCase";
import { CreateMechanicWorkshopController } from "./controllers/createMechanicWorkshopController";


import { GetAllMechanicWorkshop } from "../application/getAllMechanicWorkshopUseCase";
import { GetAllMechanicWorkshopsController } from "./controllers/getAllMechanicWorkshopController";

dotenv.config();

const mysqlMechanicWorkshopRepository = new MysqlMechanicWorkshopRepository();

export const createMechanicWorkshopUseCase = new CreateMechanicWorkshop(mysqlMechanicWorkshopRepository);
export const createMechanicWorkshopController = new CreateMechanicWorkshopController(createMechanicWorkshopUseCase);



export const getAllMechanicWorkshopUseCase = new GetAllMechanicWorkshop(mysqlMechanicWorkshopRepository);

export const getAllMechanicWorkshopsController = new GetAllMechanicWorkshopsController(getAllMechanicWorkshopUseCase);


// export const getAllMechanicWorkshopsUseCase = new GetAllMechanicWorkshops(mysqlMechanicWorkshopRepository);
// export const getAllMechanicWorkshopsController = new GetAllMechanicWorkshopsController(getAllMechanicWorkshopsUseCase);

// export const deleteMechanicWorkshopUseCase = new DeleteMechanicWorkshop(mysqlMechanicWorkshopRepository);
// export const deleteMechanicWorkshopController = new DeleteMechanicWorkshopController(deleteMechanicWorkshopUseCase);

// export const updateMechanicWorkshopUseCase = new UpdateMechanicWorkshop(mysqlMechanicWorkshopRepository);
// export const updateMechanicWorkshopController = new UpdateMechanicWorkshopController(updateMechanicWorkshopUseCase);
