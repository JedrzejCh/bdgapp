import { ITransaction } from "../types";
import mongoose, { Schema, model, Types } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';
import User from "./User";
import { Timestamp } from "mongodb";


const TransactionSchema: Schema = new Schema<ITransaction>(
  {
    _id: {type: Schema.Types.ObjectId, required: true, default: new Types.ObjectId()},
    value: {type: Number, required: true},
    income: {type: Boolean, required: true},
    expenditure: {type: Boolean, required: true},
    date: {type: String, required: true},
    userID: {type: Schema.Types.ObjectId, required: true, ref: User},
  },
  {
    timestamps: {
        createdAt: false, 
        updatedAt: true
      }
    }
  );

  TransactionSchema.plugin(URLSlugs('_id', {field: 'slug', update: true}));

const Transaction = model<ITransaction>('Transaction', TransactionSchema);

export default Transaction;
