import { Schema, models, model } from 'mongoose'

const userSchema = new Schema(
  {
    _id: String,
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String },
    image: { type: String },
    role: {
      type: String,
      default: 'user',
    },
    provider: {
      type: String,
      default: 'credentials',
    },
  },
  { timestamps: true },
)

const User = models.user || model('user', userSchema)

export default User
