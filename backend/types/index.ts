
import mongoose, { Document, Types } from "mongoose"

// export interface IUser<IdType> {
//   _id: IdType,
//   name: string,
//   email: string,
//   password: string,
// }

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserDB extends Document {
  name: string;
  email: string;
  password: string;
}

// export interface IBill<IdType> {
//   value: number,
//   income: boolean,
//   expenditure: boolean,
//   date: Date,
//   userID: IdType,
// }

export interface ITransaction {
  value: number;
  income: boolean;
  expenditure: boolean;
  date?: Date;
}

export interface ITransactionDB extends Document, ITransaction {
  // userID: Types.ObjectId
  userID: mongoose.ObjectId
}

// export type UserDB = IUser<mongoose.ObjectId>
// export type BillDB = IBill<mongoose.ObjectId>

