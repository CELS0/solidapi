import { Request, Response } from "express";

import { CreateUserUserCase } from "./CreateUserUserCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUserCase,
    ) {}
    
    async handle(req: Request, res: Response){
        const { name, email, password } = req.body

        try {
            const user = await this.createUserUseCase.execute({
                name,
                email,
                password
            })
            res.status(400).json(user)
        } catch (err) {
            res.status(400).json({
                message: err.message,
            })
        }
    }
}