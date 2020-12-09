import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const { email, name, password }  = req.body;

       try {
            const result = await this.createUserUseCase.execute({
                email,
                name,
                password
           });

           return res.status(201).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}