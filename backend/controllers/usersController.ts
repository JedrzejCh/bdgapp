import User from "../models/User";
import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from "../types";
import mongoose from "mongoose";

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

  async create(request: RequestWithUser, response: Response): Promise<Response> {
    const user = await new User({
        name: request.body.name,
        surname: request.body.surname,
        email: request.body.email,
        balance: request.body.balance,
        goal: request.body.goal,
        limit: request.body.limit,
        createdAt: new Date().toLocaleString()
    }).save();

    return response.status(201).send({ data: user, message: `New user was created`});
  },

  async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    const user = await User.findOneAndUpdate({slug: request.params.slug });
    if (!user) return next();

    user.name = request.body.name,
    user.surname = request.body.surname,
    user.email = request.body.email,
    user.balance = request.body.balance
    user.goal = request.body.goal
    user.limit = request.body.limit
    await user.save();

    return response.status(200).send({ data: user, message: `User was updated`});
  },

  async remove(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    const user = await User.findOne({slug: request.params.slug });
    if (!user) return next();

    await user.remove();
    
    return response.status(200).send({ message: `User was removed`});
  },

}
