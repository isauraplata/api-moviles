import { MysqlCuriousFactRepository } from "./MysqlRepository";

import dotenv from "dotenv";

import { CreateCuriousFact } from "../application/createCuriousFactUseCase";
import { CreateCuriousFactController } from "./controllers/createCuriousFactController";

import { GetAllCuriousFacts } from "../application/getAllCuriousFactUseCase";
import { GetAllCuriousFactsController } from "./controllers/getAllCuriousFactController";


import { DeleteCuriousFact } from "../application/deleteCuriousFactUseCase";
import { DeleteCuriousFactController } from "./controllers/deleteCuriousFactController";


import { UpdateCuriousFact } from "../application/updateCuriousFactUseCase";
import { UpdateCuriousFactController } from "./controllers/updateCuriousFactController";

dotenv.config();

const mysqlCuriousFactRepository = new MysqlCuriousFactRepository();


export const createCuriousFactUseCase = new CreateCuriousFact(mysqlCuriousFactRepository);
export const createCuriousFactController = new CreateCuriousFactController(createCuriousFactUseCase);



export const getAllCuriousFactsUseCase = new GetAllCuriousFacts(mysqlCuriousFactRepository);

export const getAllCuriousFactController = new GetAllCuriousFactsController(getAllCuriousFactsUseCase);



export const deleteteCuriousFactsUseCase = new DeleteCuriousFact(mysqlCuriousFactRepository);
export const deleteCuriousFactsController = new DeleteCuriousFactController(deleteteCuriousFactsUseCase);



export const updateUseCase = new UpdateCuriousFact(mysqlCuriousFactRepository);
export const updateUserController = new UpdateCuriousFactController(updateUseCase);


// export const loginUseCase = new Login(userRepository);
// export const loginUserController = new LoginController(loginUseCase);


// export const updateUseCase = new UpdateUser(userRepository);
// export const updateUserController = new UpdateUserController(updateUseCase);


// export const deleteteUseCase = new DeleteUser(userRepository);
// export const deleteUserController = new DeleteUserController(deleteteUseCase);


// export const getAllUserUseCase = new GetAllUser(userRepository);
// export const getAllUserController = new GetAllUserController(getAllUserUseCase);