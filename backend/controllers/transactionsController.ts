import User from "../models/User";
import { NextFunction, Request, Response } from 'express';
import Transaction from "../models/Transaction";
import { RequestWithUser } from "../types";

export default {

  async findOne(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    const transaction = await Transaction.findOne({slug: request.params.slug });
    if (!transaction) return next();

    return response.status(200).send({data: transaction});
  },

  async findAll(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    const transactions = await Transaction.find().sort({ createdAt: 'desc' });
    if (!transactions) return next();

    return response.status(200).send({data: transactions});
  },

  async create(request: Request, response: Response, next: NextFunction): Promise<Response> {
    const foundUser = await User.findOne({slug: request.params.slug});
    if (!foundUser) next();

    const transaction = await new Transaction({
      value: request.body.value,
      income: request.body.income,
      date: new Date().toLocaleString(),
      userID: foundUser._id,
    }).save();
    
    return response.status(201).send({ data: transaction, message: `A new transaction has been added`});
  },

  async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    const transaction = await Transaction.findOneAndUpdate({slug: request.params.slug });

    if (!transaction) return next();

    transaction.value = request.body.value,
    transaction.income = request.body.income,

    await transaction.save();

    return response.status(200).send({ data: transaction, message: `User was updated`});
  },

  async remove(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    const transaction = await Transaction.findOne({slug: request.params.slug });
    if (!transaction) return next();

    await transaction.remove();
    
    return response.status(200).send({ message: `Transaction was removed`});
  },

}
