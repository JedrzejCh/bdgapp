
import { IUser } from "../types";
import { Schema, model } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';


const UserSchema: Schema = new Schema<IUser>(
  {
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: false},
    balance: {type: Number, required: false}
  },
  {
    timestamps: true
  });

UserSchema.plugin(URLSlugs('name surname', {field: 'slug', update: true}));

const User = model<IUser>('User', UserSchema);

export default User;