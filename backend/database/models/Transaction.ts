
import { ITransactionDB } from "../../types";
import mongoose, { Schema, model, Types } from 'mongoose';



const TransactionSchema: Schema = new Schema<ITransactionDB>(
  {
    value: {type: Number, required: true},
    income: {type: Boolean, required: true},
    expenditure: {type: Boolean, required: false},
    date: {type: Date, required: false},
    // userID: {type: Types.ObjectId, required: true}
    userID: {type: Schema.Types.ObjectId, required: true}
  },
  {
    timestamps: true
  });

const Transaction = model<ITransactionDB>('Transaction', TransactionSchema);

export default Transaction;
