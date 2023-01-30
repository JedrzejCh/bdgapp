import { IUser } from "../types";
import { Schema, model, Types } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema: Schema = new Schema<IUser>({
    _id: {type: Schema.Types.ObjectId, required: true, default: new Types.ObjectId()},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    balance: {type: Number, required: false, default: 0},
    goal: {type: Number, required: false, default: 0},
    limit: {type: Number, required: false, default: 0},
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
  UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = model<IUser>('User', UserSchema);

export default User;