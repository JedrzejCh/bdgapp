import User from "../models/User";
import { NextFunction, Request, Response } from 'express';

export default {

  async findOne(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    const user = await User.findOne({slug: request.params.slug });
    if (!user) return next();
    return response.status(200).send({data: user});
  },

  async findAll(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    const users = await User.find().sort({ createdAt: 'desc' });
    if (!users) return next();
    return response.status(200).send({data: users});
  },

  async create(request: Request, response: Response, next: NextFunction): Promise<Response> {
    const user = new User({
        name: request.body.name,
        surname: request.body.surname,
        email: request.body.email,
        password: request.body.password,
        balance: request.body.balance
    })

    await user.save();

    return response.status(201).send({data: user, message: `New user was created`});
  },

  update(request: Request, response: Response, next: NextFunction) {

  },

  remove(request: Request, response: Response, next: NextFunction) {
    
  },
}
