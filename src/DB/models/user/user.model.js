import { model, Schema } from "mongoose";
import { SYS_ROLE ,SYS_GENDER } from "../../../common/index.js";


const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlenght: 3,
      maxlenght: 30,
      trim: true,
      uppercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlenght: 6,
    },
    gender: {
      type: Number,
      enum: Object.values(SYS_GENDER),
      default: SYS_GENDER.male,
    },
    role: {
      type: Number,
      enum: Object.values(SYS_ROLE),
      default: SYS_ROLE.user,
    },
    phoneNumper: {
      type: String,
      required: function () {
        if (this.email) return false;
        return true;
      },
      unique: true,
    },
  },
  {
    timestamps: true,
    // strict: true,
  },
);

export const User = model("User", schema);
