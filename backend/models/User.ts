import { IUser } from "../types";
import { Schema, model, Types } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const UserSchema: Schema = new Schema<IUser>({
    _id: {type: Schema.Types.ObjectId, required: true, default: new Types.ObjectId()},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    balance: {type: Number, required: false},
    createdAt: {type: String, required: true},
  },
  {
    timestamps: {
        createdAt: false, 
        updatedAt: true
      }
    }
  );

UserSchema.plugin(URLSlugs('name surname', {field: 'slug', update: true}));

const User = model<IUser>('User', UserSchema);

export default User;