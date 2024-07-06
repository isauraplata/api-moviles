import dotenv from "dotenv";


import { MysqlUserRepository } from "./MysqUserlRepository";

// import { CreateCuriousFact } from "../application/createCuriousFactUseCase";
// import { CreateCuriousFactController } from "./controllers/createCuriousFactController";

// import { GetAllCuriousFacts } from "../application/getAllCuriousFactUseCase";
// import { GetAllCuriousFactsController } from "./controllers/getAllCuriousFactController";


// import { DeleteCuriousFact } from "../application/deleteCuriousFactUseCase";
// import { DeleteCuriousFactController } from "./controllers/deleteCuriousFactController";


// import { UpdateCuriousFact } from "../application/updateCuriousFactUseCase";
// import { UpdateCuriousFactController } from "./controllers/updateCuriousFactController";

import { RegisterUser } from "../application/registerUserUseCase";
import { RegisterUserController } from "./controllers/createUserController";

import { GetAllUser } from "../application/getAllUserUseCase";
import { GetAllUsersController } from "./controllers/getAllUserController";


import { LoginUser } from "../application/loginUserUseCase";
import { LoginController } from "./controllers/loginUserController";

dotenv.config();

const mysqlUserRepository = new MysqlUserRepository();


export const registerUserUseCase = new RegisterUser(mysqlUserRepository);
export const registerUserController = new RegisterUserController(registerUserUseCase)


export const getAllUserUseCase = new GetAllUser(mysqlUserRepository);
export const getAllUsersController = new GetAllUsersController(getAllUserUseCase)


export const loginUserUseCase = new LoginUser(mysqlUserRepository);
export const loginUsersController = new LoginController(loginUserUseCase)