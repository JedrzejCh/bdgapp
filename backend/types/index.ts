
import mongoose, { Document, Types } from "mongoose"

export interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  balance: number;
}

// export interface IUserDB extends Document {
//   name: string;
//   email: string;
//   password: string;
// }

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

