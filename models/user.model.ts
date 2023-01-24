import { Schema, Document, model } from "mongoose";

interface IData {
  name: string;
  email: string;
  password: string;
}

interface ISchema extends IData, Document {}

const userSchema = new Schema<IData>(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      requiredPaths: [true, "Please enter your password"],
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<ISchema>("User", userSchema);
export default UserModel;
