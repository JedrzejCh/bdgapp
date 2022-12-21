import User from "../models/User";
import { NextFunction, Request, Response } from 'express';

export default {

  // async findOne(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
  //   const user = await User.findOne({slug: request.params.slug });
  //   if (!user) return next();

  //   return response.status(200).send({data: user});
  // },

  // async findAll(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
  //   const users = await User.find().sort({ createdAt: 'desc' });
  //   if (!users) return next();

  //   return response.status(200).send({data: users});
  // },

  // async create(request: Request, response: Response): Promise<Response> {
  //   const user = await new User({
  //       name: request.body.name,
  //       surname: request.body.surname,
  //       email: request.body.email,
  //       password: request.body.password,
  //       balance: request.body.balance
  //   }).save();
    
  //   return response.status(201).send({ data: user, message: `New user was created`});
  // },

  // async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
  //   const user = await User.findOne({slug: request.params.slug });
  //   if (!user) return next();
    
  //   user.name = request.body.name,
  //   user.surname = request.body.surname,
  //   user.email = request.body.email,
  //   user.password = request.body.password,
  //   user.balance = request.body.balance,

  //   await user.save();

  //   return response.status(200).send({ data: user, message: `User was updated`});
  // },

  // async remove(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
  //   const user = await User.findOne({slug: request.params.slug });
  //   if (!user) return next();

  //   await user.remove();
    
  //   return response.status(200).send({ message: `User was removed`});
  // },


  async findOne(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    try {
      const user = await User.findOne({slug: request.params.slug });
      return response.status(200).send({data: user});
    }catch(err) {
      response.status(500).send({ message: 'SERVER_ERROR' });
    }
  },

  async findAll(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    try  {
      const users = await User.find().sort({ createdAt: 'desc' });
       return response.status(200).send({data: users});
    }catch(err) {
      response.status(500).send({ message: 'SERVER_ERROR' });
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const user = await new User({
          name: request.body.name,
          surname: request.body.surname,
          email: request.body.email,
          password: request.body.password,
          balance: request.body.balance
      }).save();
    
      return response.status(201).send({ data: user, message: `New user was created`});
    }catch(err) {
      response.status(500).send({ message: 'SERVER_ERROR' });
    }
   
  },

  async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    try {
      const user = await User.findOne({slug: request.params.slug });
      if (!user) return next();
      
      user.name = request.body.name,
      user.surname = request.body.surname,
      user.email = request.body.email,
      user.password = request.body.password,
      user.balance = request.body.balance,

      await user.save();

      return response.status(200).send({ data: user, message: `User was updated`});
    }catch(err) {
      response.status(500).send({ message: 'SERVER_ERROR' });
    }
    
  },

  async remove(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    try {
      const user = await User.findOne({slug: request.params.slug });
      if (!user) return next();

      await user.remove();
      
      return response.status(200).send({ message: `User was removed`});
    }catch(err) {
      response.status(500).send({ message: 'SERVER_ERROR' });
    }
    
  },
}
