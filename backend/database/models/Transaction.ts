
import { ITransactionDB } from "../../types";
import mongoose, { Schema, model, Types } from 'mongoose';



const TransactionSchema: Schema = new Schema<ITransactionDB>(
  {
    value: {type: Number, required: true},
    income: {type: Boolean, required: true},
    expenditure: {type: Boolean, required: false},
    date: {type: Date, required: false},
    userID: {type: Types.ObjectId, required: true}
  },
  {
    timestamps: true
  });

export const Transaction = model<ITransactionDB>('User', TransactionSchema);

