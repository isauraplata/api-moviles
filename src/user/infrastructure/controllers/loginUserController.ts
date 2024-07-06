import bcrypt from "bcrypt"
import { Request, Response } from "express";
import genertateTokens from "../utils/generateToke";
import { LoginUser } from "../../application/loginUserUseCase";

export class LoginController {
  constructor(readonly loginUseCase: LoginUser) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log("Request body:", data);
    
    try {
      const userFind= await this.loginUseCase.run(data.email,data.password)
      
       if(!userFind){
        console.log("no lo encontro, ni modos compadre")
        return res.status(401).json({error:true,message:"Invalid email or password"});
       }
       const {password} :any = userFind
      console.log(password)



      const verifiedPassword= await bcrypt.compare(req.body.password,password) 

       if(!verifiedPassword) return res.status(401).json({error:true,message:"Invalid password"});


        //generate access and token
     const {accessToken}=await genertateTokens(userFind);
     res.status(200).json({
       error:false,
       accessToken,
       message:"Logged in successfully"
     });

      
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}