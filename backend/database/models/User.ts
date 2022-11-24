
import { IUser } from "../../types";
import { Schema, model } from 'mongoose';



const UserSchema: Schema = new Schema<IUser>(
  {
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: false},
    balance: {type: Number, required: false}
  },
  {
    timestamps: true
  });

const User = model<IUser>('User', UserSchema);

export default User;