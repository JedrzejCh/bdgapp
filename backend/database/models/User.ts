
import { IUserDB } from "../../types";
import { Schema, model } from 'mongoose';



const UserSchema: Schema = new Schema<IUserDB>(
  {
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: false},
  },
  {
    timestamps: true
  });

export const User = model<IUserDB>('User', UserSchema);

