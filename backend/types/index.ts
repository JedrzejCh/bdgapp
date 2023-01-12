
import { Request } from "express";
import mongoose, { Document, Types } from "mongoose"

export interface IUser {
  _id: mongoose.ObjectId;
  name: string;
  surname: string;
  email: string;
  password: string;
  balance: number;
  createdAt: string;
}
export interface ITransaction {
  _id: mongoose.ObjectId;
  value: number;
  income: boolean;
  expenditure: boolean;
  date: string;
  userID: mongoose.ObjectId
}

export interface RequestWithUser extends Request {
	user?: IUser;
}

