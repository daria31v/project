import mongoose from 'mongoose'

const { Schema } = mongoose;
const userSchema = new Schema(
  {
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
  },
  { timestamps: true },
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
