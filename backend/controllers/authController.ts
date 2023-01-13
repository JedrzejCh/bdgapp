import User from "../models/User";
import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import { RequestWithUser } from "../types";

export default {

  async register(request: Request, response: Response): Promise<void> {

    const { name, surname, email, password, balance } = request.body;
    const user = await new User({ name, surname, email, password, balance, createdAt: new Date().toLocaleString() });

    await User.register(user, password);

    response.send('User registration successful. Now you can log in.')
  },

  async login(request: RequestWithUser, response: Response): Promise<Response | void> {

    const token = jwt.sign({ id: request.user._id }, process.env.JWT_SECRET, { expiresIn: 1200 });

    return response.send({ token })
  }

}