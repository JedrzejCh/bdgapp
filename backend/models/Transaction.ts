
import { ITransactionDB } from "../types";
import mongoose, { Schema, model } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';


const TransactionSchema: Schema = new Schema<ITransactionDB>(
  {
    value: {type: Number, required: true},
    income: {type: Boolean, required: true},
    expenditure: {type: Boolean, required: false},
    date: {type: Date, required: false},
    userID: {type: Schema.Types.ObjectId, required: true}
  },
  {
    timestamps: true
  });

  TransactionSchema.plugin(URLSlugs('date', {field: 'slug', update: true}));

const Transaction = model('Transaction', TransactionSchema);

export default Transaction;
